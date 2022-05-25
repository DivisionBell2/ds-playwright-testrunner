import {PlaywrightTestConfig} from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config();

const config: PlaywrightTestConfig = {
    use: {
        headless: false,
        browserName: "chromium",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "retain-on-failure",
    },
    timeout: 60000,
    testMatch: [
        "projects/**/**.test.ts",
    ],
    testIgnore: [
    ],
    retries: 0,
    reporter: [["line"], ["json", {outputFile: "test-result.json"}],
    ['html', {
        open: "never",
        outputFolder: "playwright-report/" + new Date().getTime() + "-report"
        }],
    ],
}
export default config;