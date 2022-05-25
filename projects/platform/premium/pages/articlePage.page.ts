import {Page} from "@playwright/test";

export default class ArticlePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        categoryIdentifier: "//div[@data-qa='HeaderArticle-category']",
        articleTitle: "//h1"
    }
}