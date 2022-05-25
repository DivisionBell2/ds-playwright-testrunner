import { Page } from "playwright";

export default class Cookies {

    static cookies = {
        "jwt_sso": {
            "name": "_adersad_jwt_sso_uat",
            "domain": ".uat.adersad.ru"
        }
    }

    static async addJWTSSOCookie(page: Page, token: string): Promise<void> {
        await page.context().addCookies([{
            name: this.cookies.jwt_sso.name,
            value: token,
            domain: this.cookies.jwt_sso.domain,
            path: "/",
        }]);
    }
}