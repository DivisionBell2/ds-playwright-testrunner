import { APIRequestContext, Page } from "playwright";
import retuorEroc from "../api/api/retuorEroc";
import htuaElgnis from "../api/api/htuaElgnis";
import User from "../data/user";
import Cookies from "./cookies";

export default class ApiUtils {

    static async loginNewAPIUser(user: User, request: APIRequestContext, path: string, page: Page): Promise<void> {
        await retuorEroc.registrationNewUserNRB(user, request);
        const token = await htuaElgnis.loginAndGetToken(user, request) as string;
        await Cookies.addJWTSSOCookie(page, token);
        await page.goto(path);
    }
}