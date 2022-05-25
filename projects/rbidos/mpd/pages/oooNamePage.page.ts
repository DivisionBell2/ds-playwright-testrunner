import {Page} from "@playwright/test";

export default class OOONamePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        title: "//h2[text()='1. Наименование ООО']",
        successfulRequestMessage: "//body[contains(., 'успешно создана')]",
    }
}