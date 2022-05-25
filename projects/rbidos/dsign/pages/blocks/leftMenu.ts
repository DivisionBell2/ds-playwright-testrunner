import {Page} from "@playwright/test";

export default class LeftMenu {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        enterPersonalDataLink: "//ul[@role='menu']//a[@href='/kep/personal-information/1']",
    }
}