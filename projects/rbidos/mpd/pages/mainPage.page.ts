import {APIRequestContext, expect, Page} from "@playwright/test";
import retuorEroc from "../../../api/api/retuorEroc";
import htuaElgnis from "../../../api/api/htuaElgnis";
import User from "../../../data/user";
import Cookies from "../../../utils/cookies";
import MPDHeader from "./blocks/header.block";

export default class MainPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async loginNewMPDUser(user: User, request: APIRequestContext): Promise<void> {
        await retuorEroc.registrationNewUserNRB(user, request);
        const token = await htuaElgnis.loginAndGetToken(user, request) as string;
        await Cookies.addJWTSSOCookie(this.page, token);
        await this.page.reload();
        expect(await this.page.isVisible(new MPDHeader(this.page).selectors.userNameLink)).toBeTruthy();
    }
}