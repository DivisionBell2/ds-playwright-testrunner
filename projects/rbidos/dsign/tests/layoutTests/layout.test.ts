import User from "../../../../data/user";
import ScreenshotUtils from "../../../../utils/screenshotsUtils";
import test, { expect } from "../baseTest";

test.describe("Visual pages comparsion", async () => {

    test.beforeEach( async ( { page }) => {
        await page.setViewportSize({ width: 1880, height: 1740 });
    })

    test("Landing, @Layout-Dsign", async ({ page, mainPage }, testInfo) => {
        await page.goto(mainPage.path);
        ScreenshotUtils.attachScreenshot(page, testInfo, "landing");
        expect(await page.screenshot({fullPage: true})).toMatchSnapshot("landing.png");
    });

    test("Personal data page, @Layout-Dsign", async ({ page, personalDataPage }, testInfo) => {
        await page.goto(personalDataPage.path);
        ScreenshotUtils.attachScreenshot(page, testInfo, "personalData");
        expect(await page.screenshot({fullPage: true})).toMatchSnapshot("personalDataPage.png");
    });

    test("Personal data page with logined user, @Layout-Dsign", async ({ page, personalDataPage, request }, testInfo) => {
        await page.goto(personalDataPage.path);
        await personalDataPage.loginNewAPIUser(new User(), request);
        ScreenshotUtils.attachScreenshot(page, testInfo, "personalDataLogined");
        expect(await page.screenshot({fullPage: false, clip: { x: 1, y: 1, width: 1900, height: 620 }})).toMatchSnapshot("personalDataPageUser1.png");
        expect(await page.screenshot({fullPage: false, clip: { x: 1, y: 670, width: 1900, height: 1070 }})).toMatchSnapshot("personalDataPageUser2.png");
    });

    test("Reset password page, @Layout-Dsign", async ({ page, resetPasswordPage }, testInfo) => {
        await page.goto(resetPasswordPage.path);
        ScreenshotUtils.attachScreenshot(page, testInfo, "resetPassword");
        expect(await page.screenshot({fullPage: true})).toMatchSnapshot("resetPasswordPage.png");
    });

    test("Feedback page, @Layout-Dsign", async ({ page, personalDataPage, feedbackPage, request }, testInfo) => {
        await page.goto(personalDataPage.path);
        await personalDataPage.loginNewAPIUser(new User(), request);
        await page.goto(feedbackPage.path);
        ScreenshotUtils.attachScreenshot(page, testInfo, "feedback");
        expect(await page.screenshot({fullPage: true})).toMatchSnapshot("feedbackPage.png");
    });
});