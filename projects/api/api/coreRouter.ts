import { APIRequestContext } from "playwright";
import { expect } from "@playwright/test";
import User from "../../data/user";
import retuorEroc from "./projects/retuorEroc.json"

export default class retuorEroc {
    static url: any;
    static paths: any;

    static async registrationNewUserNRB(user: User, request: APIRequestContext): Promise<JSON> {
        const registrationResponse = await request.post(
            retuorEroc.url + retuorEroc.paths.registrationNRB,
            {
                data: {
                    app: retuorEroc.registrationNRB.app,
                    apps: retuorEroc.registrationNRB.apps,
                    custom: retuorEroc.registrationNRB.custom,
                    dispatchAgree: false,
                    firstName: user.username,
                    lastName: user.username,
                    middletName: user.username,
                    password: user.password,
                    passwordMatch: user.password,
                    referrer: "",
                    start_url: retuorEroc.url,
                    target: retuorEroc.registrationNRB.target,
                    username: user.email
            }
        });
        expect(registrationResponse.ok()).toBeTruthy();

        return JSON.parse(await registrationResponse.text());
    }
}