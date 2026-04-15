import type { AuthoredArticle } from "../article-types";

export function createArticle(
  slug: string,
  article: Omit<AuthoredArticle, "slug" | "canonicalPath">
): AuthoredArticle {
  return {
    slug,
    canonicalPath: `/${slug}/`,
    ...article
  };
}
