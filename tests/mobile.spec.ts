import { expect, test } from "@playwright/test";

test("mobile navigation opens and routes to family law", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  await expect(page.getByRole("navigation", { name: "Mobile primary" })).toBeVisible();
  const navigation = page.getByRole("navigation", { name: "Mobile primary" });
  await navigation.getByText("Practice Areas").click();
  await navigation.getByRole("link", { name: "Civilian Family Law & Child Custody" }).click();
  await expect(page).toHaveURL(/\/family-law$/);
  await expect(page.locator("main h1")).toBeVisible();
});
