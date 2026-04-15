import { promises as fs } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const contentRoot = path.join(rootDir, "src", "content");
const siteDir = path.join(contentRoot, "site");
const hubsDir = path.join(contentRoot, "hubs");
const articlesDir = path.join(contentRoot, "articles");
const generatedDir = path.join(contentRoot, "generated");

const hubSlugs = [
  "fundamentos-de-enfermeria",
  "cuidados",
  "tecnicas-y-procedimientos",
  "planes-de-cuidados",
  "etica-y-liderazgo",
  "carrera-en-enfermeria",
  "recursos"
];

const ignoredSlugs = new Set([
  ".astro",
  ".git",
  "Migration",
  "assets",
  "dist",
  "node_modules",
  "public",
  "scripts",
  "src",
  ...hubSlugs
]);

function extract(html, pattern, label, filePath) {
  const match = html.match(pattern);

  if (!match) {
    throw new Error(`Could not extract ${label} from ${filePath}`);
  }

  return match[1].trim();
}

function getPathname(canonicalUrl) {
  try {
    return new URL(canonicalUrl).pathname || "/";
  } catch {
    return canonicalUrl;
  }
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function readLegacyPage(filePath) {
  const html = await fs.readFile(filePath, "utf8");
  const title = extract(html, /<title>([\s\S]*?)<\/title>/i, "title", filePath);
  const description = extract(
    html,
    /<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/?>/i,
    "description",
    filePath
  );
  const canonicalUrl = extract(
    html,
    /<link\s+rel="canonical"\s+href="([\s\S]*?)"\s*\/?>/i,
    "canonical",
    filePath
  );
  const bodyHtml = extract(html, /<main[^>]*>([\s\S]*?)<\/main>/i, "main", filePath);

  return {
    title,
    description,
    canonicalPath: getPathname(canonicalUrl),
    bodyHtml
  };
}

async function writeJson(filePath, data) {
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function importHomePage() {
  const homeData = await readLegacyPage(path.join(rootDir, "index.html"));
  await writeJson(path.join(siteDir, "home.json"), homeData);
  return homeData;
}

async function importHubPages() {
  return Promise.all(
    hubSlugs.map(async (slug) => {
      const hubData = await readLegacyPage(path.join(rootDir, slug, "index.html"));

      await writeJson(path.join(hubsDir, `${slug}.json`), {
        ...hubData,
        slug
      });

      return {
        id: slug,
        ...hubData,
        slug
      };
    })
  );
}

async function importArticlePages() {
  const sitemapXml = await fs.readFile(path.join(rootDir, "sitemap.xml"), "utf8");
  const articleDirectories = Array.from(
    new Set(
      Array.from(sitemapXml.matchAll(/<loc>(https:\/\/serenfermera\.com\/[^<]+)<\/loc>/gi), (match) => {
        const pathname = new URL(match[1]).pathname;
        const segments = pathname.split("/").filter(Boolean);

        if (segments.length !== 1) {
          return null;
        }

        const [slug] = segments;

        if (!slug || ignoredSlugs.has(slug)) {
          return null;
        }

        return slug;
      }).filter(Boolean)
    )
  ).sort((left, right) => left.localeCompare(right));

  let articleCount = 0;
  const articleEntries = [];

  for (const slug of articleDirectories) {
    const filePath = path.join(rootDir, slug, "index.html");

    try {
      await fs.access(filePath);
    } catch {
      continue;
    }

    const articleData = await readLegacyPage(filePath);

    await writeJson(path.join(articlesDir, `${slug}.json`), {
      ...articleData,
      slug
    });

    articleEntries.push({
      id: slug,
      ...articleData,
      slug
    });

    articleCount += 1;
  }

  return {
    articleCount,
    articleEntries
  };
}

async function main() {
  await Promise.all([ensureDir(siteDir), ensureDir(hubsDir), ensureDir(articlesDir), ensureDir(generatedDir)]);

  const homeData = await importHomePage();
  const hubEntries = await importHubPages();
  const { articleCount, articleEntries } = await importArticlePages();

  await Promise.all([
    writeJson(path.join(generatedDir, "site.json"), [{ id: "home", ...homeData }]),
    writeJson(path.join(generatedDir, "hubs.json"), hubEntries),
    writeJson(path.join(generatedDir, "articles.json"), articleEntries)
  ]);

  console.log(
    `Imported 1 home page, ${hubSlugs.length} hubs and ${articleCount} legacy article pages into src/content.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
