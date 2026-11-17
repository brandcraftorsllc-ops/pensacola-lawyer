import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/military-divorce",
  "/family-law",
  "/criminal-defense",
  "/attorney",
  "/results",
  "/resources",
  "/blog",
  "/blog/residency-in-a-florida-military-divorce",
  "/blog/custody-rights-for-deployed-parents",
  "/blog/military-retirement-benefits-20-20-20",
  "/blog/when-stalking-is-a-misdemeanor-or-felony",
  "/blog/what-to-do-after-a-dui-arrest-in-florida",
  "/blog/how-social-media-can-affect-a-divorce",
  "/contact",
  "/case-evaluation",
  "/privacy",
  "/terms",
];

test("all discovered routes load directly with a page heading", async ({ page }) => {
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("main h1").first(), route).toBeVisible();
  }
});

test("resource categories switch the visible questions", async ({ page }) => {
  await page.goto("/resources");
  await page.getByRole("tab", { name: "Criminal Charges" }).click();
  await expect(page.getByRole("tabpanel")).toContainText("What should I do immediately after a DUI arrest in Florida?");
  await expect(page.getByRole("tabpanel")).not.toContainText("Can I file for divorce in Florida if I am stationed here?");
});

test("blog category and search filters narrow the article list", async ({ page }) => {
  await page.goto("/blog");
  await page.getByRole("tab", { name: "Criminal Defense" }).click();
  await expect(page.getByText("2 articles")).toBeVisible();
  await page.getByRole("searchbox", { name: "Search articles" }).fill("DUI");
  await expect(page.getByText("1 article")).toBeVisible();
  await expect(page.getByRole("link", { name: "What to Do After a DUI Arrest in Florida" }).first()).toBeVisible();
});

test("case evaluation advances through matter, details and contact", async ({ page }) => {
  await page.goto("/case-evaluation");
  await page.getByRole("button", { name: /Military Divorce/ }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page.getByRole("heading", { name: "A little more about the matter" })).toBeVisible();
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page.getByRole("heading", { name: "How can the office reach you?" })).toBeVisible();
  await expect(page.getByLabel("Full Name")).toBeVisible();
});

test("contact API reports invalid fields without sending mail", async ({ request, baseURL }) => {
  const response = await request.post(`${baseURL}/api/contact`, {
    headers: { origin: baseURL ?? "" },
    data: {
      name: "Test User",
      phone: "12",
      email: "not-an-email",
      message: "This should fail validation.",
      source: "contact",
    },
  });
  expect(response.status()).toBe(400);
  await expect(response.json()).resolves.toHaveProperty("message");
});

test("contact API rejects valid JSON that is not an object", async ({ request, baseURL }) => {
  for (const payload of ["null", "[]", "\"text\""]) {
    const response = await request.post(`${baseURL}/api/contact`, {
      headers: {
        origin: baseURL ?? "",
        "content-type": "application/json",
      },
      data: payload,
    });
    expect(response.status(), payload).toBe(400);
    await expect(response.json()).resolves.toHaveProperty("message");
  }
});
