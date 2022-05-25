import User from "../../data/user";
import test, {expect} from "./baseTest";

test.describe("Login new user", async() => {

    test("Login new user, @Example", async ({page, mainPage, personalDataPage, authModal, header}) => { 
        const user = new User();

        await test.step("Open main page and go to registration modal window", async () => {
            await page.goto(mainPage.path);
            await page.click(mainPage.selectors.loginButton);await page.click(authModal.selectors.goToRegistrationButon);
        });
        
        await test.step("Fill registration information", async () => {
            await page.fill(authModal.selectors.lastNameInput, user.username);
            await page.fill(authModal.selectors.firstNameInput, user.username);
            await page.fill(authModal.selectors.middleNameInput, user.username);
            await page.fill(authModal.selectors.emailInput, user.email);
            await page.fill(authModal.selectors.registrationPasswordInput, user.password);
            await page.fill(authModal.selectors.passwordMatchInput, user.password);
            await page.click(authModal.selectors.personalDataAgreementCheckbox);
        });

        await test.step("Click on registration button and reload browser page", async () => {
            await page.click(authModal.selectors.registrationButton);
            await page.waitForSelector(authModal.selectors.validationCodeInput);
            await page.reload();
        });

        await test.step("Go to uath modal window and authorize registered user", async () => {
            await page.click(mainPage.selectors.loginButton);
            await page.fill(authModal.selectors.usernameInput, user.email);
            await page.fill(authModal.selectors.authPasswordInput, user.password);
            await page.click(authModal.selectors.authButton);
            await page.waitForSelector(header.selectors.userIcon);

            
        });

        test.step("Assertions", async () => {
            expect(await page.isVisible(header.selectors.userIcon)).toBeTruthy();
            expect(await page.isDisabled(personalDataPage.selectors.continueButton)).toBeTruthy();
        });
    });
});