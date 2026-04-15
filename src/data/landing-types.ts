import type { ArticleCalloutTone } from "./article-types";

export type LandingCardTone = "default" | "accent" | "warm";
export type LandingActionVariant = "primary" | "secondary" | "ghost";

export interface LandingCard {
  href: string;
  chip: string;
  title: string;
  description: string;
  tone?: LandingCardTone;
  pills?: string[];
}

export interface LandingCallout {
  title: string;
  body: string;
  tone?: ArticleCalloutTone;
}

export interface LandingHeroAction {
  href: string;
  label: string;
  variant: LandingActionVariant;
}

export interface LandingHeroStat {
  title: string;
  text: string;
}

export interface LandingFeatureItem {
  title: string;
  text: string;
}

export interface LandingSignal {
  title: string;
  text: string;
}

export interface LandingQuickLink {
  href: string;
  label: string;
}

export interface LandingUsageStep {
  step: string;
  title: string;
  body: string;
}

export interface AuthoredHomePage {
  title: string;
  description: string;
  canonicalPath: string;
  eyebrow: string;
  heading: string;
  lede: string;
  actions: LandingHeroAction[];
  stats: LandingHeroStat[];
  featurePanel: {
    label: string;
    title: string;
    body: string;
    items: LandingFeatureItem[];
  };
  categories: LandingCard[];
  band: {
    eyebrow: string;
    title: string;
    body: string;
    signals: LandingSignal[];
  };
  recommended: LandingCard[];
  quickLinks: {
    eyebrow: string;
    title: string;
    body: string;
    items: LandingQuickLink[];
  };
  usage: {
    eyebrow: string;
    title: string;
    body: string;
    steps: LandingUsageStep[];
  };
}

export interface AuthoredHubPage {
  slug: string;
  title: string;
  description: string;
  canonicalPath: string;
  eyebrow: string;
  heading: string;
  lede: string;
  bannerLabel: string;
  bannerBody: string;
  cards: LandingCard[];
  sectionKicker: string;
  sectionTitle: string;
  sectionBody: string;
  callouts: LandingCallout[];
}
