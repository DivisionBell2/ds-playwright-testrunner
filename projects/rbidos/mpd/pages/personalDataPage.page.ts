import {Page} from "@playwright/test";

export default class PersonalDataPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        title: "//h2[text()='1. Данные заявителя']",
        titleHintText: "//h2[text()='Заполните форму ниже по подсказкам и получите пакет документов для подачи в налоговую']",
        successfulRequestMessage: "//body[contains(., 'успешно создана')]",
        lastNameInput: "#lastName"
    }
}