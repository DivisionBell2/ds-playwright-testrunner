import test from "./baseTest";

test.describe("Mouse wheel example", () => {
    test("Mouse wheel example, @Example", async ({ page, mainPage }) => {
        await page.goto(mainPage.path);
        await page.mouse.wheel(0, 1000);
        await page.waitForTimeout(2000);
        await page.mouse.wheel(0, 2000);
        await page.waitForTimeout(2000);
    });
});