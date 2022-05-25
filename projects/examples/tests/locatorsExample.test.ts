import User from "../../data/user";
import test, {expect} from "./baseTest";

test.describe("Locators example", async() => {

    test("Login new user (locators), @Example", async ({page, mainPage, personalDataPage, authModal, header}) => { 
        const user = new User();

        await test.step("Open main page and go to registration modal window", async () => {
            await page.goto(mainPage.path);
            await page.locator(mainPage.selectors.loginButton).click()
            await page.locator(authModal.selectors.goToRegistrationButon).click();
        });
        
        await test.step("Fill registration information", async () => {
            await page.locator(authModal.selectors.lastNameInput).fill(user.username);
            await page.locator(authModal.selectors.firstNameInput).fill(user.username);
            await page.locator(authModal.selectors.middleNameInput).fill(user.username);
            await page.locator(authModal.selectors.emailInput).fill(user.email);
            await page.locator(authModal.selectors.registrationPasswordInput).fill(user.password);
            await page.locator(authModal.selectors.passwordMatchInput).fill(user.password);
            await page.locator(authModal.selectors.personalDataAgreementCheckbox).click();
        });

        await test.step("Click on registration button and reload browser page", async () => {
            await page.locator(authModal.selectors.registrationButton).click();
            await page.locator(authModal.selectors.validationCodeInput).waitFor();
            await page.reload();
        });

        await test.step("Go to uath modal window and authorize registered user", async () => {
            await page.locator(mainPage.selectors.loginButton).click();
            await page.locator(authModal.selectors.usernameInput).fill(user.email);
            await page.locator(authModal.selectors.authPasswordInput).fill(user.password);
            await page.locator(authModal.selectors.authButton).click();
            await page.locator(header.selectors.userIcon).waitFor();
        });

        test.step("Assertions", async () => {
            expect(await page.locator(header.selectors.userIcon).isVisible()).toBeTruthy();
            expect(await page.locator(personalDataPage.selectors.continueButton).isVisible()).toBeTruthy();
        });
    });
});