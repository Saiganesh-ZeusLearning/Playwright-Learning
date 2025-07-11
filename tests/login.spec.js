const { test, expect } = require('@playwright/test');


test("Valid Login", async function ({ page }) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // console.log(await page.viewportSize().width)
    // console.log(await page.viewportSize().height)

    await page.getByPlaceholder("Username").fill("Admin");

    await page.locator("input[name='password']").fill("admin123");

    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").first().click();

    await page.getByText("Logout").click();

    await expect(page).toHaveURL(/login/);
})