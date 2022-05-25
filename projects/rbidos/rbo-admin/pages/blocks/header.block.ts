import {expect, Page} from "@playwright/test";

export default class Header {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        userWidget: "//div[contains(@class, 'user-widget')]",
        currentRole: "//div[contains(@class, 'current-permissions')]",
        logo: "//ul[contains(@class, 'App__logo')]//a[contains(@src, '/img/logo.png')]"
    }
}