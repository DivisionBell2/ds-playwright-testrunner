import User from "../../../../data/user";
import test, { expect } from "../baseTest";

test.describe("Functional tests for ability using service page", async() => {

    test.beforeEach(async ({ personalDataPage, page, request}) => {
        await page.goto(personalDataPage.path);
        await personalDataPage.loginNewAPIUser(new User(), request);
    });

    test("Succesfull check of ability using service, @Smoke-Dsign", async ({ page, abilityUsingServicePage, passportDataPage}) => {
        await abilityUsingServicePage.fillCheckAbilityForm({nfc: true, osVersion: false, passport: true })
        expect(page.isVisible(passportDataPage.selectors.passportSeriaInput)).toBeTruthy();
    });

    test("Сheck of ability using service with anused OS version", async ({ page, abilityUsingServicePage}) => {
        await abilityUsingServicePage.fillCheckAbilityForm({nfc: false, osVersion: false, passport: true })
        expect(page.isVisible(abilityUsingServicePage.selectors.badNewsTitle)).toBeTruthy();
        expect(page.isVisible(abilityUsingServicePage.selectors.noAvaliableOsVersionText)).toBeTruthy();

        await page.click(abilityUsingServicePage.selectors.goBackButton);
        expect(page.isVisible(abilityUsingServicePage.selectors.nfcModalTitle)).toBeTruthy();
    });

    test("Сheck of ability using service without required passport", async ({ page, abilityUsingServicePage}) => {
        await abilityUsingServicePage.fillCheckAbilityForm({nfc: false, osVersion: true, passport: false })
        expect(page.isVisible(abilityUsingServicePage.selectors.badNewsTitle)).toBeTruthy();
        expect(page.isVisible(abilityUsingServicePage.selectors.noAvaliableOsVersionText)).toBeTruthy();

        await page.click(abilityUsingServicePage.selectors.goBackButton);
        expect(page.isVisible(abilityUsingServicePage.selectors.nfcModalTitle)).toBeTruthy();
    });
});