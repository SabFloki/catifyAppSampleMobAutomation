const ActionHelper = require('../helpers/actionHelpers');
require('chai').should();
const { assert }=require('chai');
const {UP} = ActionHelper.DIRECTION;
const { ONCE } = ActionHelper.TIMES;

class catifyHomeScreen {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/catifyHomeScreen.screen.js`);
    }

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
    }

    verifyCatListPage() {
        ActionHelper.click(this.getObjectLocator().catListHomeScreen);
        return this
    }

    verifyCatName() {
        ActionHelper.isVisible(this.getObjectLocator().breedName)
        return this
    }

    verifyCatListDisplayed() {
        ActionHelper.isVisible(this.getObjectLocator().breedNameList)
        return this
    }

    toGetCatList() {
        ActionHelper.getCatList(this.getObjectLocator().breedNameList)
        return this
    }

    toGetImageList() {
        ActionHelper.getCatImageList(this.getObjectLocator().breedImageList)
        return this
    }

    verifyCatImage() {
        ActionHelper.isVisible(this.getObjectLocator().breedImage)
        return this
    }
    
    verifyifAPIDown() {
        try {
            ActionHelper.waitForElement(this.getObjectLocator().breedImageList)
        } catch (e) {
            assert.ok(
                false,
                `${this.step}: API is down`,
            );
        }
        
    }

    verifyifAPIIsDown() {
        browser.url('https://api.thecatapi.com/');
        browser.setupInterceptor();
        browser.expectRequest('GET', 'https://api.thecatapi.com/', 200);
        this.tapBackButton();
        browser.pause(1000);
        browser.assertRequests();
    }

    tapCatList(value) {
        let selector = $(`//*[@text=${value}]`);
        if (selector.isDisplayed()) {
            ActionHelper.pause(1)
            ActionHelper.click(selector)
        } else {        
            do {
                ActionHelper.pause(1)
                ActionHelper.swipe(UP, ONCE)
                ActionHelper.pause(1)
            }
            while (!selector.isDisplayed())
        }

        if (selector.isDisplayed()) {
            ActionHelper.pause(1)
            ActionHelper.click(selector)
        }

        return value;
    }

    swipeUpAfterCatAndImagesCapture() {
    //     for (let i = 0; i < 6; i++) {
    //         ActionHelper.swipe(UP, ONCE);
    //             this.toGetCatList();
    //             this.toGetImageList();
    //         }
    // }
        let selector = $(`//*[@text="Cymric"]`);
            do {
                ActionHelper.swipe(UP, ONCE);
                ActionHelper.pause(1);
                this.toGetCatList();
                this.toGetImageList();
            }
            while (!selector.isDisplayed())
}

}

module.exports = new catifyHomeScreen;
