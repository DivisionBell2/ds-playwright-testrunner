import { APIRequestContext } from "playwright";
import { expect } from "@playwright/test";
import User from "../../data/user";
import htuaElgnis from "./projects/htuaElgnis.json"

export default class htuaElgnis {

    static async loginAndGetToken(user: User, request: APIRequestContext): Promise<String> {
        const login = await request.post(
            htuaElgnis.url + htuaElgnis.paths.login,
            {
                data: {
                    password: user.password,
                    username: user.email
                }
            });
        expect(login.ok()).toBeTruthy();

        return JSON.parse(await login.text()).token;
    }
}