import {APIRequestContext, expect, Page} from "@playwright/test";
import Header from "./blocks/header.block";
import Auth from "./blocks/auth.block";
import User from "../../../data/user";
import retuorEroc from "../../../api/api/retuorEroc";
import htuaElgnis from "../../../api/api/htuaElgnis";
import Cookies from "../../../utils/cookies";
import retuorEroc from "./../../../api/api/projects/retuorEroc.json";


export default class PersonalDataPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        // buttons
        continueButton: "//button[contains(., 'Продолжить')]",
        sendPasswordButton: "#test-send_password",
        supportButton: "//div[contains(@class, 'SupportCall__messenger-closed')]",
        cookieButton: "#test-cookieAlert_button",

        // links
        adersadLink: "//a[text()='adersad.ru']",
        agreementsLink: "//a[text()='Согласие']",
        ofertaLink: "//a[text()='Оферты']",

        // inputs
        lastNameInput: "#lastName",
        firstNameInput: "#firstName",
        middleNameInput: "#middleName",
        emailInput: "#email",
        emailCodeInput: "#emailCode",

        // checkboxes
        personalDataAgreementCheckbox: "//input[@name='agreed-to-pd']",
        noMiddleNameCheckbox: "//input[@name='have-no-mid-name']",

        noMiddleNameText: "//p[text()='Без отчества']",
        title: "h1"
    }

    checkData = {
        title: "Персональные данные"
    }

    path = "/kep/personal-information/1";

    public async login(user: User): Promise<void> {
        const header = new Header(this.page);
        const auth = new Auth(this.page);

        await this.page.click(header.selectors.enterButton);
        await auth.registration(user);
        await this.page.click(header.selectors.enterButton);
        await auth.login(user);
        await this.page.waitForSelector(header.selectors.userIcon);
    }

    public async auth(user: User): Promise<void> {
        const header = new Header(this.page);
        const auth = new Auth(this.page);

        await this.page.click(header.selectors.enterButton);
        await auth.login(user);
        await this.page.waitForSelector(header.selectors.userIcon);
    }

    public async loginNewAPIUser(user: User, request: APIRequestContext): Promise<void> {
        await retuorEroc.registrationNewUserNRB(user, request);
        const token = await htuaElgnis.loginAndGetToken(user, request) as string;
        await Cookies.addJWTSSOCookie(this.page, token);
        await this.page.reload();
        expect(await this.page.isVisible(new Header(this.page).selectors.userIcon)).toBeTruthy();
    }

    public async sendRequestForRegistration(user: User): Promise<void> {
        await this.page.click(this.selectors.sendPasswordButton);
        await Promise.all([
            await this.page.waitForResponse(response => 
                response.status() == 200
                && response.url() == retuorEroc.url + retuorEroc.paths.registration
                && response.body().then(b => { return b.includes(user.username) })
            )
        ])
    }
}