import {Page} from "@playwright/test";

export default class Header {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        userIcon: "#test-landing-navPanel-logedIn",
        logo: "//div[contains(@class, 'TopMenu__topmenu-logo')]/a",
        enterButton: "//button[contains(.,'Войти')]",
        feedbackLink: "//a[contains(., 'Обратная связь')]"
    }
}