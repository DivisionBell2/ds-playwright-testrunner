import {Page} from "@playwright/test";

export default class Header {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        userIcon: "#test-landing-navPanel-logedIn"
    }
}