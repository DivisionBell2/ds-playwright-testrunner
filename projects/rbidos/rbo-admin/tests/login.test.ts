import test, { expect } from "./baseTest";
import user from "../data/adminUser.json";

test.describe("Login by admin user", async() => {

    test("Login by admin user", async ({ page, header, loginPage}) => {
        await loginPage.login(user.admin_user, user.admin_password);
        expect(page.isVisible(header.selectors.userWidget)).toBeTruthy();
        await loginPage.logout();
        expect(page.url()).toContain(loginPage.path)
    });
});