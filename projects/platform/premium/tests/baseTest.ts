import MainPage from "../pages/mainPage.page";
import Header from "../pages/blocks/header.block";
import { Page, test as BaseTest } from "@playwright/test";
import ArticlesPage from "../pages/articlesPage.page";
import ArticlePage from "../pages/articlePage.page";
import MobileUtils from "../../../utils/mobileUtils";
import urls from "../../../data/urls.json"

const test = BaseTest.extend<{
    mainPage: MainPage;
    articlesPage: ArticlesPage;
    articlePage: ArticlePage
    header: Header;
    mobilePage: Page;
}>({
    baseURL: urls.platform.premium,

    mobilePage: async ({}, use) => { await use(await new MobileUtils().mobileEmulator('iPhone 12 Pro')) },

    mainPage: async ({ page }, use) => { await use(new MainPage(page)) },
    articlesPage: async ({ page }, use) => { await use(new ArticlesPage(page)) },
    articlePage: async ({ page }, use) => { await use(new ArticlePage(page)) },
    
    header: async ({ page }, use) => { await use(new Header(page)) }
})
export default test;
export const expect = test.expect;