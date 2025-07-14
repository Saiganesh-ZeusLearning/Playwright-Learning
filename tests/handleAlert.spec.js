const {  test, expect } = require("@playwright/test");

test("Handle ALert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async (dialogWindow) => {

        expect(dialogWindow.type()).toContain("alert");
        expect(dialogWindow.message()).toContain("I am a JS Alert");

        await dialogWindow.accept();
    })

    await page.locator("button[onclick='jsAlert()']").click();
})

test("Handle Confirm", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async (dialogWindow) => {

        expect(dialogWindow.type()).toContain("confirm");
        expect(dialogWindow.message()).toContain("I am a JS Confirm");

        await dialogWindow.dismiss();
    })

    await page.locator("button[onclick='jsConfirm()']").click();
})

test("Handle Prompt Box", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async (dialogWindow) => {

        expect(dialogWindow.type()).toContain("prompt");
        expect(dialogWindow.message()).toContain("I am a JS prompt");

        await dialogWindow.accept("Automate");
    })

    await page.locator("button[onclick='jsPrompt()']").click();

    await expect( await page.locator("#result")).toHaveText("You entered: Automate");

    // await page.waitForTimeout(5000)
})