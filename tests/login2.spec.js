const { test, expect } = require("@playwright/test");

const testData = JSON.parse(JSON.stringify(require("../testData.json")));

test.describe("Data Driven Login Test", () => {
    for (const data of testData) {
        test.describe(`Login with users ${data.id}`, () => {
            test("login to application", async ({ page }) => {

                await page.goto("https://freelance-learn-automation.vercel.app/login");

                await page.locator("//input[@id='email1']").fill(data.username);

                await page.locator("#password1").fill(data.password);
            })
        })
    }
})

// test("login to application", async ({ page }) => {

//     await page.goto("https://freelance-learn-automation.vercel.app/login");

//     await page.locator("//input[@id='email1']").fill(testData.username);

//     await page.locator("#password1").fill(testData.password);

//     await page.pause();
// })