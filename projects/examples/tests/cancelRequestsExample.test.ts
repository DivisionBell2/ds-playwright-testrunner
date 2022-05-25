import Uniobr from "../api/uniobr";
import test from "./baseTest";

test.use({trace: "on"})
test.describe("Cancel request example", () => {
    test("Cancel app state requests, @Example", async ({ page, mainPage }) => {
        await page.route("**/*", request => {
            return request.request().url().startsWith(Uniobr.url + Uniobr.paths.appState)
            ? request.abort()
            : request.continue();
        });
        await page.goto(mainPage.path);
    });

    test("Cancel load images, @Example", async ({ page, mainPage }, testInfo) => {
        await page.goto(mainPage.path);
        await testInfo.attach("screenshot1", {
            body: await page.screenshot({ path: "screenshot.png" }),
            contentType: "image/png"
        });
        await page.route("**/*", request => {
            return request.request().resourceType() === "image"
            ? request.abort()
            : request.continue();
        });
        await page.reload();
        await testInfo.attach("screenshot3", {
            body: await page.screenshot({ path: "screenshot.png" }),
            contentType: "image/png"
        });
    });
});