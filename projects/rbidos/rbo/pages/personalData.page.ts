import {Page} from "@playwright/test";

export default class PersonalDataPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    paths = {
        entrepreneur: "/sodibr/personal-information/ip/1",
        legalEntity: "/sodibr/personal-information/ooo/1",
    } 

    selectors = {
        title: "//h2[text()='Ввод персональных данных']",
        existedRequestInfoBlock: "//div[contains(@class, 'card-content')]/div[contains(@class, 'already-request')]"
    }
}