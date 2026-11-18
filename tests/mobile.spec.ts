import { expect, test } from "@playwright/test";

test("mobile navigation opens and routes to family law", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  await expect(page.getByRole("navigation", { name: "Mobile primary" })).toBeVisible();
  let navigation = page.getByRole("navigation", { name: "Mobile primary" });
  await navigation.getByText("Practice Areas").click();
  await navigation.getByText("Divorce", { exact: true }).click();
  await navigation.getByRole("link", { name: "Child Support Law" }).click();
  await expect(page).toHaveURL(/\/family-law#child-support-law$/);

  await page.getByRole("button", { name: "Open menu" }).click();
  navigation = page.getByRole("navigation", { name: "Mobile primary" });
  await navigation.getByText("Practice Areas").click();
  await navigation.getByText("Criminal Defense", { exact: true }).click();
  await navigation.getByRole("link", { name: "DUI", exact: true }).click();
  await expect(page).toHaveURL(/\/criminal-defense#dui$/);
  await expect(page.locator("main h1")).toBeVisible();
});

test("practice hubs use the mobile topic rail and inline illustrations", async ({ page }) => {
  await page.goto("/family-law");
  const topic = page.locator(".practice-area-topic").first();
  await expect(topic.locator(".practice-story-topic-art .practice-artwork")).toBeVisible();
  await expect(page.locator(".practice-story-scene")).not.toBeVisible();
  await expect(topic).toHaveCSS("flex-direction", "column");
  await expect(page.locator(".practice-area-toc")).toBeVisible();
  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});

test("homepage practice areas use a single-column mobile layout", async ({ page }) => {
  await page.goto("/");
  const practiceGrid = page.locator("#practice-areas .practice-grid");
  await expect(practiceGrid.locator(".practice-card")).toHaveCount(4);
  const columnCount = await practiceGrid.evaluate(
    (element) => getComputedStyle(element).gridTemplateColumns.split(" ").length,
  );
  expect(columnCount).toBe(1);
});

test("homepage office, timeline, carousel, and services fit touch layouts", async ({ page }) => {
  await page.goto("/");

  const approach = page.locator(".approach-section");
  await expect(approach.locator(".approach-intro")).toHaveCSS("position", "static");
  const carousel = page.locator(".home-experience-carousel");
  await carousel.scrollIntoViewIfNeeded();
  await carousel.getByRole("button", { name: "Next approach slide" }).click();
  await expect(page.locator(".home-experience-slide h3")).toHaveText("Understand Your Options");
  await expect(carousel.locator(".home-experience-arrow").first()).toHaveCSS("width", "44px");

  const services = page.locator(".home-services-section");
  const layout = await services.evaluate((element) => ({
    showcaseColumns: getComputedStyle(element.querySelector(".home-services-showcase")!).gridTemplateColumns
      .split(" ").length,
    secondaryColumns: getComputedStyle(element.querySelector(".home-services-secondary")!).gridTemplateColumns
      .split(" ").length,
    featuredWidth: element.querySelector(".home-service-featured")!.getBoundingClientRect().width,
    viewportWidth: document.documentElement.clientWidth,
    documentWidth: document.documentElement.scrollWidth,
  }));
  expect(layout.showcaseColumns).toBe(1);
  expect(layout.secondaryColumns).toBe(1);
  expect(layout.featuredWidth).toBeLessThanOrEqual(layout.viewportWidth);
  expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth);
});
