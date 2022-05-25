import test from "./baseTest";

test.use({baseURL: "https://www.jsonschema2pojo.org/"})
test.describe("Download example", async() => {

    test("Download example, @Example", async ({ page }, testInfo) => {
        await test.step("login", async () => {
            await page.goto("/")
            await page.click("//button[@id='zip-button']");
            await page.waitForSelector("//a[@id='download-zip-link']");
            await page.waitForTimeout(3000);
        });

        await test.step("Download file", async () => {
            const [download] = await Promise.all([
                page.waitForEvent('download'),
                await page.click("//a[@id='download-zip-link']")
            ]);

            
            const path = download.suggestedFilename();
                await download.saveAs(path);
                await testInfo.attach('downloaded', { path: path });
        });
    });
})