"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

interface ArticleCardData {
  slug: string;
  category: string;
  readTime: string;
  listingTitle: string;
  description: string;
}

export function BlogBrowser({ articles }: { articles: ArticleCardData[] }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const categories = ["All", "Military Divorce", "Family Law", "Criminal Defense"];
  const filtered = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesQuery =
        !search ||
        `${article.listingTitle} ${article.description} ${article.category}`
          .toLocaleLowerCase()
          .includes(search);
      return matchesCategory && matchesQuery;
    });
  }, [articles, category, query]);

  return (
    <div className="blog-browser">
      <div className="blog-controls">
        <div className="resource-tabs" role="tablist" aria-label="Filter articles by category">
          {categories.map((item) => (
            <button
              type="button"
              role="tab"
              aria-selected={category === item}
              key={item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="search-field">
          <span className="sr-only">Search articles</span>
          <input
            type="search"
            placeholder="Search articles"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <span aria-hidden="true">⌕</span>
        </label>
      </div>
      <p className="eyebrow" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
      </p>
      {filtered.length > 0 ? (
        <div className="article-grid">
          {filtered.map((article) => (
            <article className="article-card" key={article.slug}>
              <div className="article-meta">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h2>
                <Link href={`/blog/${article.slug}`}>{article.listingTitle}</Link>
              </h2>
              <p>{article.description}</p>
              <span className="draft-label">Draft</span>
              <Link className="text-link" href={`/blog/${article.slug}`}>
                Read Article <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p className="empty-state">No articles match that search. Try another term or category.</p>
      )}
    </div>
  );
}
