import type { AuthoredArticle } from "../article-types";
import { carePlanArticles } from "./care-plans";
import { careerArticles } from "./career";
import { clinicalCareArticles } from "./clinical-care";
import { ethicsArticles } from "./ethics";
import { fundamentalsArticles } from "./fundamentals";
import { procedureArticles } from "./procedures";
import { resourceArticles } from "./resources";

export const authoredArticles: AuthoredArticle[] = [
  ...ethicsArticles,
  ...careerArticles,
  ...procedureArticles,
  ...carePlanArticles,
  ...fundamentalsArticles,
  ...clinicalCareArticles,
  ...resourceArticles
];

const authoredArticleMap = new Map(authoredArticles.map((article) => [article.slug, article]));

export function getAuthoredArticle(slug: string) {
  return authoredArticleMap.get(slug);
}
