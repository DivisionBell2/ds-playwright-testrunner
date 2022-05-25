import {Page} from "@playwright/test";
import User from "../../../data/user";

export default class Auth {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        // buttons
        startGetSignatureButton: "//button[contains(@class, 'Home__create-button')]",
        cookieButton: "#test-cookieAlert_button",
        getKEPButton: "//button[text()='Получить КЭП']",
        closeButton: "//span[@class='ant-modal-close-x']",
        goToRegistrationButon: "//div[@data-qa='go_singup_form']",
        goToAuthButton: "//div[@data-qa='go_singin_button']",
        registrationButton: "#test-regForm-singup_button",
        authButton: "#test-loginForm-singIn",

        // inputs
        lastNameInput: "//div[@class='ant-modal-body']//input[@id='lastName']",
        firstNameInput: "//div[@class='ant-modal-body']//input[@id='firstName']",
        middleNameInput: "//div[@class='ant-modal-body']//input[@id='middleName']",
        emailInput: "//div[@class='ant-modal-body']//input[@id='email']",
        registrationPasswordInput: "//div[contains(@class, 'Registration')]//input[@id='password']",
        passwordMatchInput: "#passwordMatch",
        validationCodeInput: "//input[@data-qa='codeEntered_field']",
        usernameInput: "#username",
        authPasswordInput: "//div[@class='ant-modal-body']//input[@id='password']",

        // links
        forgetPasswordLink: "//a[text()='Забыли пароль?']",
        agreementsLink: "//a[text()='Согласие']",
        termsLink: "//a[text()='Условиями использования']",

        personalDataAgreementCheckbox: "#personalDataAgreement",
        authTitle: "//h2[text()='Вход']",
        modalWindow: "//div[@class='ant-modal-mask']"
    }

    public async registration(user: User) {
        await this.page.click(this.selectors.goToRegistrationButon);
        await this.page.fill(this.selectors.lastNameInput, user.username);
        await this.page.fill(this.selectors.firstNameInput, user.username);
        await this.page.fill(this.selectors.middleNameInput, user.username);
        await this.page.fill(this.selectors.emailInput, user.email);
        await this.page.fill(this.selectors.registrationPasswordInput, user.password);
        await this.page.fill(this.selectors.passwordMatchInput, user.password);
        await this.page.click(this.selectors.personalDataAgreementCheckbox);
        await this.page.click(this.selectors.registrationButton);
        await this.page.waitForSelector(this.selectors.validationCodeInput);
        await this.page.reload();
    }

    public async login(user: User) {
        await this.page.fill(this.selectors.usernameInput, user.email);
        await this.page.fill(this.selectors.authPasswordInput, user.password);
        await this.page.click(this.selectors.authButton);
    }
}