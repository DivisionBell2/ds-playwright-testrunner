import User from "../../../../data/user";
import test, { expect } from "../baseTest";

test.describe("Select request type tests", () => {

    const foundersInfo = [
        {isMultiFounder: false},
        {isMultiFounder: true},
    ];

    test.beforeEach(async ( { page, mainPage, request }) => {
        await page.goto("/");
        await mainPage.loginNewMPDUser(new User(), request);
    });

    test("Select ip request, @Smoke-MPD", async ({ personalDataPage, header, page}) => {
        await page.click(header.selectors.ipRequestLink);
        await page.waitForSelector(personalDataPage.selectors.successfulRequestMessage);
        expect(await page.isVisible(personalDataPage.selectors.title)).toBeTruthy();
        expect(await page.isVisible(personalDataPage.selectors.titleHintText)).toBeTruthy();
    });

    foundersInfo.forEach(founders => {
        test("Select ooo request with multifounders = " + founders.isMultiFounder + ", @Smoke-MPD",
        async({ header, page, oooStartPage, oooNamePage }) => {

            await page.click(header.selectors.oooRequestLink);
            expect(await page.isVisible(oooStartPage.selectors.titleHintText)).toBeTruthy();

            founders.isMultiFounder
            ? await page.click(oooStartPage.selectors.multiFounderRadio)
            : await page.click(oooStartPage.selectors.oneFounderRadio);

            await page.click(oooStartPage.selectors.continueButton);
            await page.waitForSelector(oooNamePage.selectors.successfulRequestMessage);
            expect(await page.isVisible(oooNamePage.selectors.title)).toBeTruthy();
        });
    });
});