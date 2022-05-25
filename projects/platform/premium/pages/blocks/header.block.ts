import {Page} from "@playwright/test";

export default class Header {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        knowledgeBaseButton: "//a[contains(., 'База знаний')]",
        articlesLink: "//nav//a[contains(., 'Статьи')]"
    }
}