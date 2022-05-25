import {Page} from "@playwright/test";

export default class AbilityUsingServicePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        // text
        noNFCFunctionText: "//li[text()='функции NFC']",
        noAvaliableOsVersionText: "//li[text()='телефона с ОС Android 5.0 (или выше) или iOS 13.0 (или выше)']",
        noBiometricalPassportText: "//li[text()='биометрического заграничного паспорта, выпущенного после 2009 года']",

        // selects
        osNameSelect: "#osName",
        osVersionSelect: "//div[@role='combobox' and contains(., 'или выше')]",

        // options
        androidOption: "//li[text()='Андроид']",
        lowVersionOption: "//li[contains(., 'или ниже')]",

        // titles
        nfcModalTitle: "//h3[text()='Как узнать есть ли в телефоне NFC?']",
        badNewsTitle: "//h2[text()='Плохие новости']",

        // buttons
        isNFCButton: "//span[text()='Как узнать, есть ли в телефоне NFC?']",
        isPassportWithChipButton: "//span[text()='Как узнать, подходит ли паспорт?']",
        okModalButton: "//button[contains(., 'OK')]",
        continueButton: "//button[contains(., 'Продолжить')]",
        goBackButton: "//button[contains(., 'Вернуться назад')]",

        // radio
        hasSbolTruthRadio: "//div[@id='hasSbol']/label[1]",
        hasBioPassportTruthRadio: "//div[@id='hasBioPassport']/label[1]",
        hasBioPassportFalseRadio: "//div[@id='hasBioPassport']/label[2]",
        
        androidLink: "//a[text()='Как узнать версию Android?']",
        nfcCheckbox: "//span[text()='NFC']",
        passportImage: "//img[@src='/img/passport/biometry_passport.jpg']"
    }
    
    path = "/kep/personal-information/2";

    public async fillCheckAbilityForm( parameters: { nfc: boolean, osVersion: boolean, passport: boolean }) {
        await this.page.goto(this.path);
        await this.page.click(this.selectors.hasSbolTruthRadio);

        if (parameters.passport) {
            await this.page.click(this.selectors.hasBioPassportTruthRadio);
        } else {
            await this.page.click(this.selectors.hasBioPassportFalseRadio);
        }
        
        await this.page.click(this.selectors.osNameSelect);
        await this.page.click(this.selectors.androidOption);

        if (parameters.nfc) await this.page.click(this.selectors.nfcCheckbox);
        if (!parameters.osVersion) {
            await this.page.click(this.selectors.osVersionSelect);
            await this.page.click(this.selectors.lowVersionOption);
        }
        await this.page.click(this.selectors.continueButton);
    }
}