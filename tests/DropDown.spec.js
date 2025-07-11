import { test, expect } from '@playwright/test';

test("Select Values From Dropdown", async function ({page}) {
    

    await page.goto("https://shop.mheducation.com/login?redirectUrl=https:%2F%2Fwww.mheducation.com%2F");
    
    // await page.locator("//select[@id='accounttype']").selectOption({value: "4: Object"})
    
    // await page.waitForTimeout(3000);
    
    // await page.locator("//select[@id='accounttype']").selectOption({index: 6})
    
    // await page.waitForTimeout(3000);
    
    // const value = await page.locator("//select[@id='accounttype']").textContent();
    
    // await expect(value.includes("PreK12 - Teacher")).toBeTruthy();

    let state = await page.$("#accounttype");
    let allElements = await state.$$("option");
    let flag = false;

    for(let i = 0; i < allElements.length; i++){
        let value = await allElements[i].textContent();
        if(value.includes("PreK12")){
            flag = true;
            break;
        }
        await console.log(i , " = ", value);
    }
    await expect(flag).toBeTruthy();
})