import {expect, Page} from "@playwright/test";
import OOOStartPage from "../oooStartPage.page";
import PersonalDataPage from "../personalDataPage.page";

export default class Header {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        ipRequestLink: "//ul[contains(@class, 'Header')]//a[text()='Регистрация ИП']",
        oooRequestLink: "//ul[contains(@class, 'Header')]//a[text()='Регистрация ООО']",
        userNameLink: "//a[contains(@class,'Header__header-user-name')]",

        logo: "//ul[contains(@class, 'Header')]//a[contains(@href, 'sberbank.ru')]"
    }

    public async selectRequestType(requestType: string): Promise<void> {
        if (requestType == "ip") {
            await this.page.click(this.selectors.ipRequestLink);
            expect(await this.page.isVisible(new PersonalDataPage(this.page).selectors.titleHintText)).toBeTruthy();
        } else {
            await this.page.click(this.selectors.oooRequestLink);
            expect(await this.page.isVisible(new OOOStartPage(this.page).selectors.titleHintText)).toBeTruthy();
        }
    }
}