export type ArticleCalloutTone = "default" | "warning" | "alert";

export interface ArticleSummaryItem {
  label: string;
  text: string;
}

export interface ArticleLinkItem {
  href: string;
  label: string;
}

export interface RelatedArticleCard {
  href: string;
  chip: string;
  title: string;
  description: string;
}

export interface ArticleCallout {
  title: string;
  body: string;
  tone?: ArticleCalloutTone;
}

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface BulletsBlock {
  type: "bullets";
  items: string[];
}

export interface QuoteBlock {
  type: "quote";
  text: string;
}

export interface TableBlock {
  type: "table";
  columns: string[];
  rows: string[][];
}

export interface CalloutBlock {
  type: "callout";
  title: string;
  body: string;
  tone?: ArticleCalloutTone;
}

export interface CalloutGridBlock {
  type: "callout-grid";
  items: ArticleCallout[];
}

export interface FaqBlock {
  type: "faq";
  lead?: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export interface LinksBlock {
  type: "links";
  items: ArticleLinkItem[];
}

export type ArticleBlock =
  | ParagraphBlock
  | BulletsBlock
  | QuoteBlock
  | TableBlock
  | CalloutBlock
  | CalloutGridBlock
  | FaqBlock
  | LinksBlock;

export interface AuthoredArticleSection {
  id: string;
  title: string;
  tocLabel?: string;
  blocks: ArticleBlock[];
}

export interface AuthoredArticle {
  slug: string;
  title: string;
  description: string;
  canonicalPath: string;
  eyebrow: string;
  intro: string;
  pills: string[];
  summary: ArticleSummaryItem[];
  tocTitle?: string;
  sections: AuthoredArticleSection[];
  related?: RelatedArticleCard[];
}
