import User from "../../data/user";
import test, { expect } from "./baseTest";

test.describe("Soft asserts example", async() => {

    test("Check ways to feedback page from personal data page, @Example", async ({ page, header, personalDataPage, feedbackPage, request }) => {
        await page.goto(personalDataPage.path);
        await personalDataPage.loginNewAPIUser(new User(), request);
        await page.click(header.selectors.feedbackLink);
        await page.waitForSelector(feedbackPage.selectors.messageArea);
        expect.soft(await page.isVisible(feedbackPage.selectors.messageArea)).toBeTruthy();
        await page.goBack();
        await page.click(personalDataPage.selectors.cookieButton);
        await page.click(personalDataPage.selectors.supportButton);
        await page.waitForSelector(feedbackPage.selectors.messageArea);
        expect.soft(await page.isVisible(feedbackPage.selectors.messageArea)).toBeTruthy();
        console.log("All checks complete");
    });
});