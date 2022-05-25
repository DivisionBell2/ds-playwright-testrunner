import { devices, Browser } from "@playwright/test";
import test, { expect } from "../baseTest";

test.describe("Navigation tests for main page", () => {

    test("Clicking on main banner, @Smoke-Premium", async ({ page, mainPage, articlePage }) => {
        await page.goto(mainPage.path);
        const bannerTitle = await page.textContent(mainPage.selectors.mainBunnerTitle);
        await page.click(mainPage.selectors.mainBanner);
        await page.waitForSelector(articlePage.selectors.categoryIdentifier);
        expect(bannerTitle).toEqual(await page.textContent(articlePage.selectors.articleTitle))
    });

    test("Clicking on main banner mobile, @Smoke-Premium", async ({ mainPage, mobilePage, articlePage }) => {
        await mobilePage.goto(mainPage.path);
        const bannerTitle = await mobilePage.textContent(mainPage.selectors.mainBunnerTitle);
        await mobilePage.click(mainPage.selectors.mainBanner);
        await mobilePage.waitForSelector(articlePage.selectors.categoryIdentifier);
        expect(bannerTitle).toEqual(await mobilePage.textContent(articlePage.selectors.articleTitle))
    });
});
