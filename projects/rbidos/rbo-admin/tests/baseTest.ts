import { BrowserContext, test as BaseTest, TestInfo } from "@playwright/test";
import urls from "../../../data/urls.json"
import Header from "../pages/blocks/header.block";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";
import BidsPage from "../pages/bidsPage";
import LeftMenu from "../pages/blocks/leftMenu.block";

const test = BaseTest.extend<{
    loginPage: LoginPage;
    mainPage: MainPage;
    bidsPage: BidsPage;
    header: Header;
    leftMenu: LeftMenu;
    context: BrowserContext;
    testInfo: TestInfo;
    
}>({
    baseURL: urls.sodibr.admin,
    
    loginPage: async ({ page }, use) => { await use(new LoginPage(page)) },
    mainPage: async ({ page }, use) => { await use(new MainPage(page)) },
    bidsPage: async ({ page }, use) => { await use(new BidsPage(page)) },
    header: async ({ page }, use) => { await use(new Header(page)) },
    leftMenu: async ({ page }, use) => { await use(new LeftMenu(page)) },
})
export default test;
export const expect = test.expect;