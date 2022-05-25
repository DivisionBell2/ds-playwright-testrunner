import TabsUtils from "../../../../utils/tabs";
import test, { expect } from "../baseTest";
import * as checkedData from "../../data/checkedData.json";

test.describe("Click on logo tests", () => {
    test("Click on logo and go to sberbank site, @Regress", async ({ page,  header }) => {
        await page.goto("/");
        await page.click(header.selectors.logo);
        expect((await TabsUtils.getNewTab(page)).url()).toContain(checkedData.sberbankLink);
    });
});