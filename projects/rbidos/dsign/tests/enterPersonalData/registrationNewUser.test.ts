import test, { expect } from "../baseTest";
import User from "../../../../data/user";

test.describe("Registration new user on personal data page", async() => {

    let user: User;

    test.beforeEach(async ({ page, personalDataPage }) => {
        user = new User();
        await page.goto(personalDataPage.path);
        await page.fill(personalDataPage.selectors.lastNameInput, user.username);
        await page.fill(personalDataPage.selectors.firstNameInput, user.username);
        await page.fill(personalDataPage.selectors.emailInput, user.email);
        await page.click(personalDataPage.selectors.personalDataAgreementCheckbox);
    })

    test("Registration new user on personal data page, @Smoke", async ({ page, personalDataPage }) => {
        await page.fill(personalDataPage.selectors.middleNameInput, user.username);
        await personalDataPage.sendRequestForRegistration(user);

        expect(await page.isVisible(personalDataPage.selectors.emailCodeInput)).toBeTruthy();
    });

    test("Registration new user on personal data page without middle name, @Smoke", async ({ page, personalDataPage }) => {
        await page.click(personalDataPage.selectors.noMiddleNameCheckbox);
        await personalDataPage.sendRequestForRegistration(user);

        expect(await page.isVisible(personalDataPage.selectors.noMiddleNameText)).toBeTruthy();
        expect(await page.isVisible(personalDataPage.selectors.emailCodeInput)).toBeTruthy();
    });
});

