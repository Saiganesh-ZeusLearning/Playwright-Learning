const {  test, expect } = require("@playwright/test");

test("Keyboard Events in Playwright", async ({ page }) => {

    await page.goto("https://www.google.com/");


    // await page.locator("textarea[name='q']").fill("Mukesh Otwani");

    await page.locator("textarea[name='q']").focus();
    
    // await page.keyboard.press("Control+A"); 

    // await page.keyboard.press("Control+C"); 
    
    // await page.keyboard.press("Backspace");
    
    // await page.keyboard.press("Control+V"); 
    // await page.keyboard.press("Enter");
})