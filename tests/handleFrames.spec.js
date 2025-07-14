const {  test, expect } = require("@playwright/test");

test("Handle Frames", async ({ page }) => {

    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    const iFrame = await page.frameLocator("//frame[@title='All Packages']");

    await iFrame.locator("a[href='java/applet/package-frame.html']").click();
})