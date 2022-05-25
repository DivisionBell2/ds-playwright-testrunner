import test, { expect } from "./baseTest";
const Tesseract = require('tesseract.js');

test.describe("Read text from image example, @Example", () => {

    test("Read text from image", async ({ page, mainPage }) => {
        await page.goto(mainPage.path);
        await page.waitForSelector(mainPage.selectors.phoneImage);
        const img = await page.$(mainPage.selectors.phoneImage);
        await img.screenshot({ path: "phoneImage.png" });
        const imgText = await Tesseract.recognize('./phoneImage.png');
        console.log(imgText.data.text);
        expect(imgText.data.text).toContain("18+");
    });
});