import { TestInfo } from "@playwright/test";
import { Page } from "playwright";

export default class ScreenshotUtils {

    static async attachScreenshot(page: Page, testInfo: TestInfo, screenshotName: string): Promise<void> {
        const screenshot = await page.screenshot();
        await testInfo.attach(screenshotName, {
            contentType: "image/png",
            body: screenshot 
        });
    }
}