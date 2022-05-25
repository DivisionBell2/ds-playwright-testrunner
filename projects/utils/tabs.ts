import { Page } from "playwright";

export default class TabsUtils {

    static async getNewTab(page: Page): Promise<Page> {
        await page.waitForTimeout(4000);
        return page.context().pages()[1];
    }
}