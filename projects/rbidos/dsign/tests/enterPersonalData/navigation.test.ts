import TabsUtils from "../../../../utils/tabs";
import test, { expect } from "../baseTest";
import * as checkedData from "../../data/checkedData.json";
import User from "../../../../data/user";

test.describe("Personal data page navigation tests", async() => {

    test.beforeEach(async ({ page, personalDataPage }) => {
        await page.goto(personalDataPage.path);
    });

    test("Click on logo", async ({ page, header, mainPage }) => {
        await page.click(header.selectors.logo);
        await page.waitForSelector(mainPage.selectors.loginButton);
        expect(await page.isVisible(mainPage.selectors.loginButton)).toBeTruthy();
    });

    test("Click on adersad.ru link", async ({ page, personalDataPage }) => {
        await page.click(personalDataPage.selectors.adersadLink);
        expect((await TabsUtils.getNewTab(page)).url()).toContain(checkedData.adersadLink);
    });

    test("Click on feedback link", async ({ page, personalDataPage, header, feedbackPage, request }) => {
        await personalDataPage.loginNewAPIUser(new User(), request);
        await page.click(header.selectors.feedbackLink);
        await page.waitForNavigation();
        expect(await page.isVisible(feedbackPage.selectors.messageArea)).toBeTruthy();
    });

    test("Click on agreements link", async ({ page, personalDataPage }) => {
        await page.click(personalDataPage.selectors.agreementsLink);
        expect((await TabsUtils.getNewTab(page)).url()).toContain(checkedData.agreementsLink);
    });

    test("Click on feedback link by logined user", async ({ page, personalDataPage, feedbackPage, header, request }) => {
        await personalDataPage.loginNewAPIUser(new User(), request);
        await page.click(header.selectors.feedbackLink);
        await page.waitForNavigation();
        expect(await page.isVisible(feedbackPage.selectors.messageArea)).toBeTruthy();
    });

    test("Click on oferta link by logined user", async ({ page, personalDataPage, request }) => {
        await personalDataPage.loginNewAPIUser(new User(), request);
        await page.click(personalDataPage.selectors.ofertaLink);
        expect((await TabsUtils.getNewTab(page)).url()).toContain(checkedData.ofertaLink);
    });

    test("Click on support button", async ({ page, personalDataPage, feedbackPage, request }) => {
        await personalDataPage.loginNewAPIUser(new User(), request);
        await page.click(personalDataPage.selectors.cookieButton);
        expect(await page.isHidden(personalDataPage.selectors.cookieButton)).toBeTruthy();

        await page.click(personalDataPage.selectors.supportButton);
        expect(await page.isVisible(feedbackPage.selectors.messageArea)).toBeTruthy();
    });
});