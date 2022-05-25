import test, { expect } from "../baseTest";
import ApiUtils from "../../../../utils/apiUtils";
import User from "../../../../data/user";

test.describe("Navigation tests for left navigation menu", async() => {

    test("Go to enter personal data page, @Regress", async ({ page, abilityUsingServicePage, personalDataPage, leftMenu, request}) => {
        await ApiUtils.loginNewAPIUser(new User(), request, abilityUsingServicePage.path, page);
        await page.click(leftMenu.selectors.enterPersonalDataLink);
        expect(await (await page.waitForSelector(personalDataPage.selectors.firstNameInput)).isVisible()).toBeTruthy();
    });
});