import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const htmlPageSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  canonicalPath: z.string().min(1),
  bodyHtml: z.string().min(1)
});

const routedPageSchema = htmlPageSchema.extend({
  slug: z.string().min(1)
});

const site = defineCollection({
  loader: file("./src/content/generated/site.json"),
  schema: htmlPageSchema
});

const hubs = defineCollection({
  loader: file("./src/content/generated/hubs.json"),
  schema: routedPageSchema
});

const articles = defineCollection({
  loader: file("./src/content/generated/articles.json"),
  schema: routedPageSchema
});

export const collections = {
  site,
  hubs,
  articles
};
