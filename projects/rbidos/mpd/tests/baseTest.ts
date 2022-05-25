import MainPage from "../pages/mainPage.page";
import PersonalDataPage from "../pages/personalDataPage.page";
import Header from "../pages/blocks/header.block";
import { BrowserContext, test as BaseTest, TestInfo } from "@playwright/test";
import OOOStartPage from "../pages/oooStartPage.page";
import OOONamePage from "../pages/oooNamePage.page";
import urls from "../../../data/urls.json"

const test = BaseTest.extend<{
    mainPage: MainPage;
    personalDataPage: PersonalDataPage;
    oooStartPage: OOOStartPage;
    oooNamePage: OOONamePage;
    header: Header;
    context: BrowserContext;
    testInfo: TestInfo;
}>({
    baseURL: urls.sodibr.mpd,

    viewport: {
        width: 1980,
        height: 1620
    },

    mainPage: async ({ page }, use) => { await use(new MainPage(page)) },
    personalDataPage: async ({ page }, use) => { await use(new PersonalDataPage(page)) },
    oooStartPage: async ({ page }, use) => { await use(new OOOStartPage(page)) },
    oooNamePage: async ({ page }, use) => { await use(new OOONamePage(page)) },
    
    header: async ({ page }, use) => { await use(new Header(page)) }
})
export default test;
export const expect = test.expect;