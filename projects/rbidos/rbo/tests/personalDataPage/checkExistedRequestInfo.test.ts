import retuorEroc from "../../../../api/api/retuorEroc";
import htuaElgnis from "../../../../api/api/htuaElgnis";
import User from "../../../../data/user";
import Cookies from "../../../../utils/cookies";
import Uniobr from "../../api/uniobr";
import test, { expect } from "../baseTest";

test.describe("Check existed request tests", async() => {

    test("Check existed request for Entrepreneur, @Smoke-obr", async ({ page, mainPage, personalDataPage, header, request}) => {

        const user = new User();

        await retuorEroc.registrationNewUserNRB(user, request);
        const token = await htuaElgnis.loginAndGetToken(user, request) as string;
        await Cookies.addJWTSSOCookie(page, token);
        await page.goto(mainPage.path);
        expect(await page.isVisible(header.selectors.userIcon)).toBeTruthy();

        await page.click(mainPage.selectors.startEntrepreneurRequestButton);
        await page.waitForSelector(personalDataPage.selectors.title);
        expect(await page.isHidden(personalDataPage.selectors.existedRequestInfoBlock)).toBeTruthy();

        await Uniobr.postNewEntrepreneurRequest(request, token);
        await page.reload();
        expect(await page.isVisible(personalDataPage.selectors.existedRequestInfoBlock)).toBeTruthy();
    });
});