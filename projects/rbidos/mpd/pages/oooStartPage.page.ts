import {Page} from "@playwright/test";

export default class OOOStartPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        oneFounderRadio: "//span[text()='Упрощённая регистрация с одним учредителем']",
        multiFounderRadio: "//span[text()='Больше возможностей для регистрации']",

        continueButton: "//button[contains(., 'Продолжить')]",
        titleHintText: "//h2[text()='Заполните форму ниже по подсказкам и получите пакет документов для подачи в налоговую']",
    }
}