import Uniobr from "../api/uniobr";
import { test, expect } from "@playwright/test";
import User from "../../data/user";
import retuorEroc from "../../api/api/retuorEroc";
import htuaElgnis from "../../api/api/htuaElgnis";

test.describe("API fldata test, @Example", () => {
    test("GET fldata", async ({ request }) => {
        const user = new User();

        await retuorEroc.registrationNewUserNRB(user, request);
        const token = await htuaElgnis.loginAndGetToken(user, request) as string;

        const responseBody = JSON.parse(await (await Uniobr.getFldata(request, token)).text());

        expect(responseBody.address).toBeNull();
        expect(responseBody.birthDate).toBeNull();
        expect(responseBody.birthPlace).toBeNull();
        expect(responseBody.contactPhone).toBeNull();
        expect(responseBody.email).toEqual(user.email);
        expect(responseBody.firstName).toEqual(user.username);
        expect(responseBody.founderInfo).toBeNull();
        expect(responseBody.hideFounderInfo).toBeNull();
        expect(responseBody.inn).toBeNull();
        expect(responseBody.lastName).toEqual(user.username);
        expect(responseBody.middleName).toBeNull();
        expect(responseBody.partner).toBeNull();
        expect(responseBody.passportGivenBy).toBeNull();
        expect(responseBody.passportGivenDate).toBeNull();
        expect(responseBody.passportGivenDept).toBeNull();
        expect(responseBody.passportNumber).toBeNull();
        expect(responseBody.passportSeria).toBeNull();
        expect(responseBody.passportValidDate).toBeNull();
        expect(responseBody.phone).toBeNull();
        expect(responseBody.registryAddress).toBeNull();
        expect(responseBody.sbolValidated).toBeNull();
        expect(responseBody.sexMale).toBeNull();
        expect(responseBody.snils).toBeNull();
        expect(responseBody.ssoId).not.toBeNull();
    });
});