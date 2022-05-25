import {Page} from "@playwright/test";

export default class FeedbackPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    path = "/kep/feedback";

    selectors = {
        messageArea: "#messageText",
    }
}