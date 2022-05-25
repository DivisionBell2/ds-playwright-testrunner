import User from "../../../../data/user";
import ApiUtils from "../../../../utils/apiUtils";
import TabsUtils from "../../../../utils/tabs";
import test, { expect } from "../baseTest";
import checkedData from "../../data/checkedData.json"

test.describe("Navigation tests for ability using service page", async() => {

    test.beforeEach(async ({ page, abilityUsingServicePage, request}) => {
        await ApiUtils.loginNewAPIUser(new User(), request, abilityUsingServicePage.path, page);
    });

    test("How to know android version", async ({ page, abilityUsingServicePage}) => {
        await page.click(abilityUsingServicePage.selectors.androidLink);
        const newTab = await TabsUtils.getNewTab(page);
        await newTab.waitForSelector(checkedData.sodibrFAQAndroidImage);
        expect(newTab.isVisible(checkedData.sodibrFAQAndroidImage)).toBeTruthy();
    });

    test("Is NFC modal window", async ({ page, abilityUsingServicePage}) => {
        await page.click(abilityUsingServicePage.selectors.isNFCButton);
        expect(await page.isVisible(abilityUsingServicePage.selectors.nfcModalTitle, { timeout: 2000 })).toBeTruthy();
        await page.click(abilityUsingServicePage.selectors.okModalButton);
        await page.waitForTimeout(1000);
        expect(await page.isHidden(abilityUsingServicePage.selectors.nfcModalTitle, { timeout: 2000 })).toBeTruthy();
    });

    test("Is passport fit modal window", async ({ page, abilityUsingServicePage}) => {
        await page.click(abilityUsingServicePage.selectors.isPassportWithChipButton);
        await page.waitForSelector(abilityUsingServicePage.selectors.passportImage);
        expect(await page.isVisible(abilityUsingServicePage.selectors.passportImage, { timeout: 2000 })).toBeTruthy();
        await page.click(abilityUsingServicePage.selectors.okModalButton);
        await page.waitForTimeout(3000);
        expect(await page.isHidden(abilityUsingServicePage.selectors.passportImage)).toBeTruthy();
    });
});