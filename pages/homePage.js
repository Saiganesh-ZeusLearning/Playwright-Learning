const {expect} = require("@playwright/test");

class HomePage{
    constructor(page){
        this.page = page;
        this.manageOption = "//span[normalize-space()='Manage']";
        this.menu = "img[alt='menu']";
        this.logoutOption = "//button[normalize-space()='Sign out']"
        
    }

    async verifyManageOption(){
        await expect(this.page.locator(this.manageOption)).toBeVisible();
    }

    async logoutFromApplication(){
        
        await this.page.click(this.menu);
        await this.page.click(this.logoutOption);
    }
}

module.exports = HomePage;