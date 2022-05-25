import User from "../../data/user";
import test from "./baseTest";

test.describe("Highlights elements example", async() => {

    test("Attach screenshot with highlighted elements in header, @Example", async ({ page, header, personalDataPage, request }, testInfo) => {
        await page.goto(personalDataPage.path);
        await personalDataPage.loginNewAPIUser(new User(), request);

        const sc = await page.screenshot(
            {
                path: "./reports/examples/highlighted.png",
                mask: [
                    page.locator(header.selectors.logo),
                    page.locator(header.selectors.userIcon)
                ]
            }
        );

        await testInfo.attach("highlighted screenshot", {
            body: sc,
            contentType: "image/png"
        });
    });
});