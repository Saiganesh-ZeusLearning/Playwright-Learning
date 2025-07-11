const { test, expect } = require('@playwright/test');


test("File Uploader", async function ({ page }) {
    await page.goto("http://127.0.0.1:5500/build/")

    await page.locator("input[type='file']").setInputFiles("./upload/data.json");

    expect(await page.locator("input[type='file']")).toHaveText("data.json");
})