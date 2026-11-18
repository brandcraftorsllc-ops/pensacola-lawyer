import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/military-divorce",
  "/family-law",
  "/motions-for-contempt",
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

test("desktop navigation follows the requested order and opens practice areas on hover", async ({ page }) => {
  await page.goto("/");
  const nav = page.locator(".desktop-nav");
  const menuItems = await nav.evaluate((element) =>
    Array.from(element.children).map((child) =>
      child.tagName === "DETAILS"
        ? child.querySelector("summary")?.textContent?.trim()
        : child.textContent?.trim(),
    ),
  );
  expect(menuItems).toEqual([
    "Home",
    "About Us",
    "Practice Areas",
    "Motions for Contempt",
    "Contact Us",
  ]);

  const dropdown = nav.locator(".nav-dropdown");
  await dropdown.hover();
  await expect(dropdown).toHaveAttribute("open", "");
  const divorceLink = dropdown.getByRole("link", { name: "Divorce", exact: true });
  const criminalLink = dropdown.getByRole("link", { name: "Criminal Defense", exact: true });
  await expect(divorceLink).toBeVisible();
  await expect(criminalLink).toBeVisible();

  await divorceLink.hover();
  const divorceSubmenu = dropdown.locator('[data-practice-submenu="divorce"]');
  await expect(divorceSubmenu).toBeVisible();
  await expect(divorceSubmenu.locator("a")).toHaveText([
    "Military Divorce",
    "Child Support Law",
    "Deployed Parents’ Custody Rights",
    "How can Social Media Affect My Divorce",
    "Military Retirement Benefits",
    "Military Divorce Residency",
    "Same Sex Marriage in Florida",
    "Senior Citizen Divorce",
    "Substantial Asset Divorce",
    "The Irretrievably-Broken Marriage",
    "What to Expect During a Florida Divorce",
  ]);
  await expect(divorceSubmenu.getByRole("link", { name: "Child Support Law" })).toHaveAttribute(
    "href",
    "/family-law#child-support-law",
  );
  await expect(
    divorceSubmenu.getByRole("link", { name: "What to Expect During a Florida Divorce" }),
  ).toBeVisible();

  await criminalLink.hover();
  const criminalSubmenu = dropdown.locator('[data-practice-submenu="criminal-defense"]');
  await expect(criminalSubmenu).toBeVisible();
  await expect(criminalSubmenu.locator("a")).toHaveText([
    "Drug Trafficking",
    "Stalking",
    "Violation of Domestic Violence – Criminal",
    "Domestic Violence Injunction",
    "Sexual Assault",
    "DUI",
  ]);
  await expect(criminalSubmenu.getByRole("link", { name: "Drug Trafficking" })).toHaveAttribute(
    "href",
    "/criminal-defense#drug-trafficking",
  );
  await expect(criminalSubmenu.getByRole("link", { name: "DUI", exact: true })).toBeVisible();
});

test(
  "homepage practice section uses the four supplied areas without a separate military intro",
  async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#practice-areas");

    await expect(section.locator(".practice-intro .eyebrow")).toHaveText("How We Can Help");
    await expect(section.locator(".practice-intro h2")).toHaveText("Practice Areas");
    await expect(section.locator(".practice-card h3")).toHaveText([
      "Divorce",
      "Military Divorce",
      "Family Law",
      "Criminal Defense",
    ]);
    await expect(section.locator(".practice-card p")).toHaveText([
      "Practical guidance through the personal and financial decisions of divorce.",
      "Help for military service members and spouses facing family changes.",
      "Personal attention for the issues affecting your family and future.",
      "Understand your options when criminal allegations put your freedom at stake.",
    ]);
    await expect(section.getByRole("link", { name: /Discuss your case/ })).toHaveAttribute(
      "href",
      "/case-evaluation",
    );
    const columnCount = await section.locator(".practice-grid").evaluate(
      (element) => getComputedStyle(element).gridTemplateColumns.split(" ").length,
    );
    expect(columnCount).toBe(2);
    await expect(
      page.getByRole("heading", { name: "Military service can add family-law questions" }),
    ).toHaveCount(0);
    await expect(page.locator(".scroll-cue")).toHaveAttribute("href", "#practice-areas");
  },
);

test("all discovered routes load directly with a page heading", async ({ page }) => {
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("main h1").first(), route).toBeVisible();
  }
});

test("attorney profile uses verified content and preserves protected site sections", async ({ page }) => {
  await page.goto("/attorney");

  await expect(page.locator("[data-animation-scope]")).toHaveAttribute("data-animation-active", "true");
  await expect(page.locator('[data-reveal="hero"]')).toHaveAttribute("data-revealed", "true");
  await expect(page.locator(".page-hero .eyebrow")).toHaveText("Attorney Profile");
  await expect(page.locator("main h1")).toHaveText("James M. Burns");
  await expect(page.locator(".breadcrumbs")).toContainText("Home");
  await expect(page.getByRole("heading", { name: "Background" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Courtroom Experience" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Pensacola Community Ties" })).toBeVisible();
  await expect(page.getByText("Verified details about James M. Burns's courtroom experience")).toBeVisible();
  await expect(page.getByText(/Bar admission, education, years in practice/)).toBeVisible();
  await expect(page.getByText(/Placeholder — add/)).toHaveCount(0);

  await page.locator('[data-reveal="left"]').scrollIntoViewIfNeeded();
  await expect(page.locator('[data-reveal="left"]')).toHaveAttribute("data-revealed", "true");
  await page.getByRole("heading", { name: "Background" }).scrollIntoViewIfNeeded();
  await expect(page.locator('[data-reveal="right"]').first()).toHaveAttribute(
    "data-revealed",
    "true",
  );

  await page.getByRole("heading", { name: "Focused legal representation." }).scrollIntoViewIfNeeded();
  const practiceAreas = page.locator("main").getByRole("article");
  await expect(practiceAreas.first()).toHaveAttribute("data-revealed", "true");
  await expect(practiceAreas.nth(1)).toHaveAttribute("data-reveal-delay", "2");
  const secondPracticeDelay = await practiceAreas.nth(1).evaluate(
    (element) => getComputedStyle(element).transitionDelay,
  );
  expect(secondPracticeDelay).toBe("0.22s");
  await expect(practiceAreas.locator("h3")).toHaveText([
    "Divorce",
    "Military Divorce",
    "Family Law",
    "Criminal Defense",
  ]);
  const practiceLinks = await practiceAreas
    .locator('a[aria-label^="Explore "]')
    .evaluateAll((links) => links.map((link) => (link as HTMLAnchorElement).getAttribute("href")));
  expect(practiceLinks).toEqual(
    ["/family-law", "/family-law#military-divorce", "/family-law#child-support-law", "/criminal-defense"],
  );
  await expect(
    page.getByRole("heading", { name: "Personal Attention. Practical Guidance." }),
  ).toBeVisible();

  const contact = page.locator(".cta-band");
  await expect(contact).not.toHaveAttribute("data-reveal");
  await expect(contact).toHaveAttribute("aria-label", "Contact the Pensacola office.");
  await expect(contact.getByRole("heading")).toHaveText("Contact the Pensacola office.");
  await expect(contact).toContainText("Call to arrange a free consultation and discuss your legal matter.");
  await expect(page.getByRole("contentinfo")).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Practice areas" })).toBeVisible();
});

test("attorney practice photos load and the consultation label stays legible", async ({ page }) => {
  await page.goto("/attorney");

  const consultationLink = page.locator("main").getByRole("link", { name: /Free Consultation/ }).first();
  await consultationLink.scrollIntoViewIfNeeded();
  await expect(consultationLink).toBeVisible();
  await expect(consultationLink).toHaveCSS("color", "rgb(10, 22, 41)");

  const practiceAreas = page.locator("main").getByRole("article");
  await expect(practiceAreas).toHaveCount(4);
  await expect(practiceAreas.locator("h3")).toHaveText([
    "Divorce",
    "Military Divorce",
    "Family Law",
    "Criminal Defense",
  ]);
  const practiceLinks = await practiceAreas
    .locator('a[aria-label^="Explore "]')
    .evaluateAll((links) => links.map((link) => (link as HTMLAnchorElement).getAttribute("href")));
  expect(practiceLinks).toEqual([
    "/family-law",
    "/family-law#military-divorce",
    "/family-law#child-support-law",
    "/criminal-defense",
  ]);
  for (const index of [0, 1, 2, 3]) {
    const image = practiceAreas.nth(index).locator("img");
    await image.scrollIntoViewIfNeeded();
    await expect(image).toBeVisible();
    await expect
      .poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth))
      .toBeGreaterThan(0);
  }

  const practiceGrid = practiceAreas.first();
  await expect
    .poll(() =>
      practiceGrid.evaluate(
        (element) => getComputedStyle(element.parentElement!).gridTemplateColumns.split(" ").length,
      ),
    )
    .toBe(4);
  await page.setViewportSize({ width: 900, height: 900 });
  await expect
    .poll(() =>
      practiceGrid.evaluate(
        (element) => getComputedStyle(element.parentElement!).gridTemplateColumns.split(" ").length,
      ),
    )
    .toBe(2);
  await page.setViewportSize({ width: 390, height: 844 });
  await expect
    .poll(() =>
      practiceGrid.evaluate(
        (element) => getComputedStyle(element.parentElement!).gridTemplateColumns.split(" ").length,
      ),
    )
    .toBe(1);
});

test("practice hub navigation links target sections on both hub pages", async ({ page }) => {
  for (const { route, submenu } of [
    { route: "/family-law", submenu: "divorce" },
    { route: "/criminal-defense", submenu: "criminal-defense" },
  ]) {
    await page.goto(route);
    const sectionIds = await page.locator(".practice-area-topic").evaluateAll((sections) =>
      sections.map((section) => section.id),
    );
    const dropdown = page.locator(".desktop-nav .nav-dropdown");
    await dropdown.hover();
    await dropdown
      .getByRole("link", { name: submenu === "divorce" ? "Divorce" : "Criminal Defense" })
      .hover();
    const navigationTargets = await Promise.all(
      [
        page.locator(".practice-area-toc a"),
        page.locator(`.desktop-nav [data-practice-submenu="${submenu}"] a`),
      ].map((links) =>
        links.evaluateAll((anchors) =>
          anchors.map((anchor) => new URL((anchor as HTMLAnchorElement).href).hash.slice(1)),
        ),
      ),
    );

    expect(sectionIds.length, route).toBeGreaterThan(0);
    for (const targets of navigationTargets) expect(targets, route).toEqual(sectionIds);
    await expect(page.locator(".practice-area-topic .practice-artwork")).toHaveCount(sectionIds.length);
    const columnCount = await page
      .locator(".practice-story-grid")
      .evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length);
    expect(columnCount, route).toBe(3);
    await expect(page.locator(".practice-area-toc")).toHaveCSS("position", "sticky");
    await expect(page.locator(".practice-story-scene")).toHaveCSS("position", "sticky");

    const targetId = sectionIds[sectionIds.length - 1];
    if (!targetId) throw new Error(`Missing practice section for ${route}`);
    const targetTopic = page.locator(`#${targetId}`);
    const targetTitle = await targetTopic.locator("h2 span").nth(1).textContent();
    await targetTopic.scrollIntoViewIfNeeded();
    await expect(page.locator(`.practice-area-toc a[href="#${targetId}"]`)).toHaveAttribute(
      "aria-current",
      "location",
    );
    await expect(page.locator(".practice-story-scene-title")).toHaveText(targetTitle ?? "");
    await expect
      .poll(async () =>
        Number(
          await page
            .locator(".practice-story-nav-track span")
            .evaluate((element) => element.style.getPropertyValue("--practice-progress")),
        ),
      )
      .toBeGreaterThan(0.6);
  }
});

test("legacy military divorce route redirects to its consolidated section", async ({ page }) => {
  await page.goto("/military-divorce");
  await expect(page).toHaveURL(/\/family-law#military-divorce$/);
  await expect(page.locator("#military-divorce")).toBeVisible();
});

test("practice guide remains readable and navigable with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/family-law");
  await expect(page.locator(".practice-story-topic-heading").first()).toHaveCSS("opacity", "1");

  const lastTopic = page.locator(".practice-story-topic").last();
  const targetId = await lastTopic.getAttribute("id");
  if (!targetId) throw new Error("Missing final practice topic ID.");
  await lastTopic.scrollIntoViewIfNeeded();
  await expect(page.locator(`.practice-area-toc a[href="#${targetId}"]`)).toHaveAttribute(
    "aria-current",
    "location",
  );
  await expect(page.locator(".practice-story-scene-title")).toHaveText(
    await lastTopic.locator(".practice-story-topic-heading span").nth(1).textContent() ?? "",
  );
});

test("attorney profile reveals remain visible when reduced motion is requested", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/attorney");

  await expect(page.locator("[data-animation-scope]")).not.toHaveAttribute("data-animation-active", "true");
  await expect(page.locator(".page-hero h1")).toHaveCSS("opacity", "1");
  await expect(page.locator("main").getByRole("article").first()).toHaveCSS("opacity", "1");
  await expect(page.getByRole("heading", { name: "Personal Attention. Practical Guidance." })).toBeVisible();
});

test("approach timeline progress follows the scroll position", async ({ page }) => {
  await page.goto("/");
  const timeline = page.locator(".approach-timeline");
  const midpoint = await timeline.evaluate((element) => {
    const markers = element.querySelectorAll<HTMLElement>(".approach-marker");
    const first = markers[0].getBoundingClientRect();
    const last = markers[markers.length - 1].getBoundingClientRect();
    const firstTop = window.scrollY + first.top + first.height / 2;
    const lastTop = window.scrollY + last.top + last.height / 2;
    const start = firstTop - window.innerHeight * 0.68;
    const end = lastTop - window.innerHeight * 0.42;
    return start + (end - start) / 2;
  });

  await page.evaluate((top) => window.scrollTo(0, top), midpoint);
  await expect
    .poll(async () =>
      Number(await timeline.evaluate((element) => element.style.getPropertyValue("--approach-progress"))),
    )
    .toBeGreaterThan(0.45);
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
