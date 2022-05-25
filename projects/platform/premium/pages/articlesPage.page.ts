import {Page} from "@playwright/test";

export default class ArticlesPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        title: "//h1[text()='Знания']"
    }

    path = "/learn/blog";
}