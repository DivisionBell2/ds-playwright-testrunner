import test, { expect } from "../baseTest";

test.describe("Navigation of main page tests", () => {

    test.beforeEach(async ( { page, mainPage }) => {
        await page.goto(mainPage.path);
    });

    test("Click on get SSK button, @Smoke", async ({ page, mainPage, personalDataPage }) => {
        await page.click(mainPage.selectors.cookieButton);
        await page.click(mainPage.selectors.getKEPButton);
        expect(await (await page.$(personalDataPage.selectors.title)).textContent()).toBe(personalDataPage.checkData.title);
    });

    test("Click on get signature sertificate key button, @Smoke", async ({ page, mainPage, personalDataPage }) => {
        await page.click(mainPage.selectors.startGetSignatureButton);
        expect(await (await page.$(personalDataPage.selectors.title)).textContent()).toBe(personalDataPage.checkData.title);
    });
});