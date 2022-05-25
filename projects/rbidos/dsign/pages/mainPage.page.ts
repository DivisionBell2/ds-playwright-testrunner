import {Page} from "@playwright/test";

export default class MainPage {
    private page: Page;
    path = "/"

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        // buttons
        startGetSignatureButton: "//button[contains(@class, 'Home__create-button')]",
        cookieButton: "#test-cookieAlert_button",
        getKEPButton: "//button[text()='Получить КЭП']",
        loginButton: "//button[contains(@class, 'Home__login-button')]",

        phoneImage: "//img[@src='/img/landing/require-18.svg']"
    }
}