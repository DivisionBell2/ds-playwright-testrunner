import {Page} from "@playwright/test";

export default class LoginPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    path = "/auth/login"

    selectors = {
        //tabMainMenu
        emailInput:  '#username',
        passwordInput: '#password',
        loginButton: "//button[contains(., 'Вход')]",
        logoutButton: "//*[@id='root']/..//header/div[2]/button",
        notificationWidget: "//div[@class='ant-notification-notice-description' and contains(., 'Неправильный логин или пароль')]",
    }

    public async login(email: string, password: string) {
        await this.page.goto(this.path);
        await this.page.fill(this.selectors.emailInput, email);
        await this.page.fill(this.selectors.passwordInput, password);
        await this.page.click(this.selectors.loginButton);
    }

    public async logout() {
        await this.page.isVisible(this.selectors.logoutButton);
        await this.page.click(this.selectors.logoutButton);
        await this.page.isHidden(this.selectors.loginButton);
    }
}