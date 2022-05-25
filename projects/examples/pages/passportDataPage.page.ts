import {Page} from "@playwright/test";

export default class PassportDataPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        passportSeriaInput: "#passportSeria",
    }
    
    path = "/kep/personal-information/3";
}