import retuorEroc from "../../api/api/retuorEroc";
import User from "../../data/user";
import test from "./baseTest";

test.describe("Login new user", async() => {

    test("Login new user, @Example", async ({ page, mainPage, authModal }) => {
        const user = new User();

        await page.goto(mainPage.path);

        await page.click(mainPage.selectors.loginButton);
        await page.click(authModal.selectors.goToRegistrationButon);
        await page.fill(authModal.selectors.lastNameInput, user.username);
        await page.fill(authModal.selectors.firstNameInput, user.username);
        await page.fill(authModal.selectors.middleNameInput, user.username);
        await page.fill(authModal.selectors.emailInput, user.email);
        await page.fill(authModal.selectors.registrationPasswordInput, user.password);
        await page.fill(authModal.selectors.passwordMatchInput, user.password);
        await page.click(authModal.selectors.personalDataAgreementCheckbox);
        await page.click(authModal.selectors.registrationButton);

        const [response] = await Promise.all([
            page.waitForResponse(response => 
                response.status() == 200
                &&
                response.url() == retuorEroc.url + retuorEroc.paths.registrationNRB
                &&
                response.body().then(b => {
                    console.log(b);
                    return b.includes("Автотест")
                })
            )
        ]);
        console.log(await response.json());
    });
});