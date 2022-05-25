import { BrowserContext, test as BaseTest, TestInfo } from "@playwright/test";
import urls from "../../../data/urls.json"
import Header from "../pages/blocks/header.block";
import MainPage from "../pages/mainPage";
import PersonalDataPage from "../pages/personalData.page";

const test = BaseTest.extend<{
    mainPage: MainPage;
    personalDataPage: PersonalDataPage;
    header: Header;
    context: BrowserContext;
    testInfo: TestInfo;
}>({
    baseURL: urls.sodibr.obr,
    
    mainPage: async ({ page }, use) => { await use(new MainPage(page)) },
    personalDataPage: async ({ page }, use) => { await use(new PersonalDataPage(page)) },

    header: async ({ page }, use) => { await use(new Header(page)) },
})
export default test;
export const expect = test.expect;