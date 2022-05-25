import {Page} from "@playwright/test";

export default class BidsPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    paths = "/bids"
    
    selectors = {
        titleobr: "//div[contains(@class, 'Bidsobr__wrapper')]/..//div[@class='ant-card-head-title']",

        //filterBlock
        searchInput: "//div[contains(@class, 'Bidsobr__table-operations')]/..//input[contains(@placeholder, 'Поиск по № заявки, ФИО')]",
        searchButton: "//div[contains(@class, 'Bidsobr__table-operations')]/..//button[contains(@class, 'ant-input-search-button')]",

        requestNumberCells: "//tbody/tr[1]/td[2]",
        requestTypeCells: "//tbody/tr/td[3]",
        requestChannelCells: "//tbody/tr/td[4]",
        requestBankCells: "//tbody/tr/td[5]",
        requestDateCells: "//tbody/tr/td[6]",
        requestStatusCells: "//tbody/tr/td[7]//p[1]",
        requestStatusNoteCells: "//tbody/tr/td[7]//p[2]",
        requestUpdateCells: "//tbody/tr/td[8]",
        requestUserCells: "//tbody/tr/td[9]/span",
        requestUserPhoneAndEmailInfo: "//*[contains(@class, 'ant-popover-placement-top')]/..//div[@class='ant-popover-inner-content']",
        requestTableSpinner: "//*[@class='ant-table-wrapper']/div/div[2]"
    }
    
}