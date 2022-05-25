import test, { expect } from "./baseTest";

test.describe("Navigation of main menu tests", () => {

    test.beforeEach(async ( { page, mainPage }) => {
        await page.goto(mainPage.path);
    });

    // test("Click on get SSK button", async ({ page, mainPage, personalDataPage }) => {
    //     await page.click(mainPage.selectors.cookieButton);
    //     await page.click(mainPage.selectors.getKEPButton);
    //     expect(await (await page.$(personalDataPage.selectors.title)).textContent()).toBe(personalDataPage.checkData.title);
    // });
});