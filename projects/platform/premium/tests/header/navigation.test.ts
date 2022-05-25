import test, { expect } from "../baseTest";

test.describe("Navigation tests for header", () => {

    test("Clicking on articles link", async ({ page, mainPage, articlesPage, header }) => {
        await page.goto(mainPage.path);
        await page.click(header.selectors.knowledgeBaseButton);
        await page.waitForSelector(header.selectors.articlesLink);
        await page.click(header.selectors.articlesLink);
        await page.waitForSelector(articlesPage.selectors.title);
        
        expect(page.url()).toContain(articlesPage.path);
    });
});