import MainPage from "../pages/mainPage.page";
import PersonalDataPage from "../pages/personalDataPage.page";
import Header from "../pages/blocks/header.block";
import { BrowserContext, test as BaseTest, TestInfo } from "@playwright/test";
import Auth from "../pages/blocks/auth.block";
import ResetPasswordPage from "../pages/resetPasswordPage.page";
import FeedbackPage from "../pages/feedbackPage.page";
import AbilityUsingServicePage from "../pages/abilityUsingServicePage.page";
import PassportDataPage from "../pages/passportDataPage.page";
import LeftMenu from "../pages/blocks/leftMenu";
import urls from "../../../data/urls.json"

const test = BaseTest.extend<{
    mainPage: MainPage;
    personalDataPage: PersonalDataPage;
    header: Header;
    authModal: Auth;
    leftMenu: LeftMenu;
    resetPasswordPage: ResetPasswordPage;
    feedbackPage: FeedbackPage;
    abilityUsingServicePage: AbilityUsingServicePage;
    passportDataPage: PassportDataPage;
    context: BrowserContext;
    testInfo: TestInfo;
}>({
    baseURL: urls.sodibr.dsign,
    
    mainPage: async ({ page }, use) => { await use(new MainPage(page)) },
    personalDataPage: async ({ page }, use) => { await use(new PersonalDataPage(page)) },
    resetPasswordPage: async ({ page }, use) => { await use(new ResetPasswordPage(page)) },
    feedbackPage: async ({ page }, use) => { await use(new FeedbackPage(page)) },
    abilityUsingServicePage: async ({ page }, use) => { await use(new AbilityUsingServicePage(page)) },
    passportDataPage: async ({ page }, use) => { await use(new PassportDataPage(page))},
    
    header: async ({ page }, use) => { await use(new Header(page)) },
    authModal: async ({ page }, use) => { await use(new Auth(page)) },
    leftMenu: async ({ page }, use) => { await use(new LeftMenu(page)) }
})
export default test;
export const expect = test.expect;