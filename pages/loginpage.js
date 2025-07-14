const {expect} = require("@playwright/test");
const { appendFileSync } = require("fs");

class LoginPage{

    constructor(page){
        this.page = page;
        this.header = "//h2[normalize-space()='Sign In']";  
        this.username = "//input[@id='email1']";
        this.password = "//input[@id='password1']";
        this.loginButton = "button[type='submit']";
    }

    async loginToApplication(user, password){
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginButton);
    }

    async verifySignIn(){
        await expect(this.page.locator(this.header)).toBeVisible();
    }
} 

module.exports = LoginPage;