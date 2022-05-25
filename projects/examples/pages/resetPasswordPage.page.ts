import {Page} from "@playwright/test";

export default class ResetPasswordPage {

    path = "/sodibr/password-reset-request";
    private page: Page;

    constructor(page: Page) {
    }

    selectors = {
        title: "//h1[text()='Сброс пароля']",
        emailInput: "#email",
        resetPasswordButton: "//button[contains(., 'Сбросить пароль')]",
        resetPasswordMessage: "//span[text()='Инструкции для смены пароля отправлены Вам на почту']"
    }
}