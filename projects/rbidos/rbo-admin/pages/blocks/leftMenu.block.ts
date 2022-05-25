import {Page} from "@playwright/test";

export default class LeftMenu {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    path = "/"

    selectors = {

        bidsPageLink: "//li[@role='menuitem']/a[contains(., 'Заявки системы')]",
        mpdTab: "//li[@role='menuitem']/a[contains(@href, 'mpd')]",
        notificationsTab: "//li[@role='menuitem']/a[contains(@href, 'notifications')]",
        coopTab: "//li[@role='menuitem']/a[contains(@href, 'bids-coop')]",
        uploadsTab: "//li[@role='menuitem']/a[contains(@href, 'uploads')]",
        exportTab: "//li[@role='menuitem']/a[contains(@href, 'export')]",
        rolesTab: "//li[@role='menuitem']/a[contains(@href, 'roles')]",
        usersTab: "//li[@role='menuitem']/a[contains(@href, 'users')]",
        kapTab: "//li[@role='menuitem']/a[contains(@href, 'kap')]",
        resendSmsTab: "//li[@role='menuitem']/a[contains(@href, 'resendsms')]",
        curtainTab: "//li[@role='menuitem']/a[contains(@href, 'curtain')]",
        partnersTab: "//li[@role='menuitem']/a[contains(@href, 'partners')]"
    }
}