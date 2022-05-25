import { Page, chromium, devices } from "playwright";

export default class MobileUtils {

    constructor() {}

    async mobileEmulator(deviceName: string): Promise<Page> {
        const device = devices[deviceName];
        const browser = await chromium.launch();
        const context = await browser.newContext({ ...device });
        return await context.newPage();
    }
}