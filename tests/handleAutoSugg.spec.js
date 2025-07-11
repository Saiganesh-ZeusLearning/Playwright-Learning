const {  test, expect } = require("@playwright/test");

test("Keyboard Events in Playwright Using Keyboard", async ({ page }) => {

    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").fill("Playwright");

    await page.waitForSelector("//li[@role='presentation']")

    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    
    await page.keyboard.press("Enter");
})

test("Keyboard Events in Playwright Using Loop", async ({ page }) => {

    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").fill("playwright");

    await page.waitForSelector("//li[@role='presentation']")

    const elements = await page.$$("//li[@role='presentation']")

    for(let i = 0; i < elements.length; i++){

        const text = await elements[i].textContent();

        if(text.includes("automation")){
            await elements[i].click();
            break;
        }
    }
})