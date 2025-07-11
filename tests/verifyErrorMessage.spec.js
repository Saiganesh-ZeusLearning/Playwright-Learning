const {test, expect} = require('@playwright/test')

test("Verify Error Message", async function ({page})  {
        
    await page.goto("https://shop.mheducation.com/login")

    await page.locator('[name="email"]').fill("Admin@company.com");
    await page.locator('[name="password"]').fill("Admin");

    await page.locator("//button[@id='login-submit-btn']").click();

    const errorMessage = await page.locator("ngb-alert[id='message-banner'] p[class='mb-0']").textContent()

    console.log("Error Message is " + errorMessage);
    expect(errorMessage.includes("do not match any accounts")).toBeTruthy();
})