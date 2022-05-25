import { APIRequestContext, APIResponse } from "playwright";
import { expect } from "@playwright/test";
import uniobr from "../../../../projects/api/api/projects/sodibr/uniobr.json"

export default class Uniobr {
    static async postNewEntrepreneurRequest(request: APIRequestContext, token: string): Promise<void> {
        const newReqeust = await request.post(
            uniobr.url + uniobr.paths.request,
            {
                headers: {
                    authorization: "Bearer " + token
                },
                data: {
                    type: "entrepreneur"
                }
            });
            expect(newReqeust.ok()).toBeTruthy();
    }


    static async getFldata(request: APIRequestContext, token: string): Promise<APIResponse> {
        const fldata = await request.get(
            uniobr.url + uniobr.paths.fldata,
            {
                headers: {
                    authorization: "Bearer " + token
                }
            });
        expect(fldata.ok()).toBeTruthy();

        return fldata;
    }

    static async postNewEntrepreneurRequest(request: APIRequestContext, token: string): Promise<void> {
        const newReqeust = await request.post(
            uniobr.url + uniobr.paths.request,
            {
                headers: {
                    authorization: "Bearer " + token
                },
                data: {
                    type: "entrepreneur"
                }
            });
            expect(newReqeust.ok()).toBeTruthy();
    }
}