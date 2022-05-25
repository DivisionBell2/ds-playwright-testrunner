import {Page} from "@playwright/test";

export default class MainPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    path = "/"

    selectors = {
        startEntrepreneurRequestButton: "#test-landing-upper-ip_button"
    }
}