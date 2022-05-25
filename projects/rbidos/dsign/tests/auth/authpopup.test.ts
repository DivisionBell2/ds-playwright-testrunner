import TabsUtils from "../../../../utils/tabs";
import test, { expect } from "../baseTest";
import * as checkedData from "../../data/checkedData.json";

test.describe("Auth popup navigation tests", async() => {

    test.beforeEach(async ({ page, mainPage, authModal }) => {
        await page.goto(mainPage.path);
        await page.click(mainPage.selectors.loginButton);
        expect(await page.isVisible(authModal.selectors.authTitle)).toBeTruthy();
    });

    test("Click on close button on auth popup", async ( { page, authModal }) => {
        await page.click(authModal.selectors.closeButton);
        expect(await page.isHidden(authModal.selectors.modalWindow)).toBeTruthy();
    });

    test("Click forget password link", async ( { page, authModal, resetPasswordPage }) => {
        await page.click(authModal.selectors.forgetPasswordLink);
        await page.waitForSelector(resetPasswordPage.selectors.title)
        expect(await page.isVisible(resetPasswordPage.selectors.title)).toBeTruthy();
    });

    test("Click on enter button on auth popup", async ( { page, authModal }) => {
        await page.click(authModal.selectors.goToRegistrationButon);
        await page.click(authModal.selectors.goToAuthButton);
        expect(await page.isVisible(authModal.selectors.authButton)).toBeTruthy();
    });

    test("Click on agreeement link on auth popup", async ( { page, authModal }) => {
        await page.click(authModal.selectors.goToRegistrationButon);
        await page.click(authModal.selectors.agreementsLink);
        expect((await TabsUtils.getNewTab(page)).url()).toContain(checkedData.agreementsLink);
    });

    test("Click on terms link on auth popup", async ( { page, authModal }) => {
        await page.click(authModal.selectors.goToRegistrationButon);
        await page.click(authModal.selectors.termsLink);
        expect((await TabsUtils.getNewTab(page)).url()).toContain(checkedData.termsLink);
    });
});