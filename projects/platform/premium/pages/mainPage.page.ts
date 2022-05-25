import {Page} from "@playwright/test";

export default class MainPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    path = "/";

    selectors = {
        mainBanner: "//div[@data-qa='BannerMain']",
        mainBunnerTitle: "//div[@data-qa='BannerMain']//div/span"
    }
}