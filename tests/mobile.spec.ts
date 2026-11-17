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

test("practice hubs keep illustrations and topic sections in a single mobile column", async ({ page }) => {
  await page.goto("/family-law");
  const topic = page.locator(".practice-area-topic").first();
  await expect(topic.locator(".practice-artwork")).toBeVisible();
  const columnCount = await topic.evaluate(
    (element) => getComputedStyle(element).gridTemplateColumns.split(" ").length,
  );
  expect(columnCount).toBe(1);
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
