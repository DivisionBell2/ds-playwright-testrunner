import test, { expect } from "../baseTest";
import User from "../../../../data/user";
import retuorEroc from "../../../../api/api/projects/retuorEroc.json";

test.describe("Reset password test", async() => {
    test("Reset password test and check request status, @Smoke", async ({ page, resetPasswordPage }) => {
        const user = new User();
        await page.goto(resetPasswordPage.path);
        await page.fill(resetPasswordPage.selectors.emailInput, user.email);
        await page.click(resetPasswordPage.selectors.resetPasswordButton);
        await Promise.all([
            await page.waitForResponse(response => 
                response.status() == 204
                && response.url() == retuorEroc.url + retuorEroc.paths.resetPassword
            )
        ]);
        await page.waitForSelector(resetPasswordPage.selectors.resetPasswordMessage);
        expect(await page.isVisible(resetPasswordPage.selectors.resetPasswordMessage)).toBeTruthy();
    });
});