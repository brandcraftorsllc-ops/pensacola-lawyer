import type { MetadataRoute } from "next";
import { articleData } from "@/data/site-content";
import { getSiteUrl } from "@/lib/site";

const paths = [
  "/",
  "/military-divorce",
  "/family-law",
  "/motions-for-contempt",
  "/criminal-defense",
  "/attorney",
  "/results",
  "/resources",
  "/blog",
  "/contact",
  "/case-evaluation",
  "/privacy",
  "/terms",
  ...articleData.map(({ slug }) => `/blog/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) return [];
  return paths.map((path) => ({
    url: new URL(path, `${base}/`).toString(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
