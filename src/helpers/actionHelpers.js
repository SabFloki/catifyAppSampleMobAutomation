const TIMES = {
    ONCE: 1,
    TWICE: 2,
    THRICE: 3,
    FOUR_TIMES: 4,
};

const DIRECTION = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    RIGHT: Symbol('RIGHT'),
    LEFT: Symbol('LEFT'),
};
const moment = require('moment');
const allureReporter = require('@wdio/allure-reporter').default

class ActionHelper {

    static launchBrowserUrl(urlToLaunch) {
        browser.url(urlToLaunch)
    }

    static getTitle() {
        return browser.getTitle();
    }

    static saveScreenshot(locator) {
        $(locator).saveScreenshot('./screenshots/Image_' + moment().format('DD-MMM-YYYY-HH-MM-SS') + '.png')
    }

    static getCatList(elem) {
        let cellData = browser.$$(elem)
        let catLists = [];
        for (let i = 0; i < cellData.length; i++){
            catLists.push(this.getText(cellData[i]));
            allureReporter.addStep(`Cat Name is ${this.getText(cellData[i])}`);
        }
        return catLists;
    }

    static getCatImageList(elems) {
        let imageData = browser.$$(elems)
        for (let j = 1; j < imageData.length; j++){
            expect(imageData[j]).toBeDisplayed()
            this.saveScreenshot(imageData[j]);
        }
       return $(elems).isDisplayed() ? true : false;
    }

    static launchApp() {
        driver.launchApp();
    }

    static switchToNativeContext() {
        browser.switchContext('NATIVE_APP');
    }

    static backButton() {
        browser.pressKeyCode(4);
        return this;
    }

    static pause(seconds) {
        browser.pause(seconds * 1000);
    }

    static isVisible(locator) {
        return $(locator).isDisplayed() ? true : false;
    }

    static click(locator) {
            $(locator).click();
    }

    static waitForElement(locator, waitTimeInSeconds) {
        $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
    }

    static clearText(locator) {
        $(locator).clearValue();
    }

    static sendText(locator, inputText) {
        $(locator).addValue(inputText);
    }

    static getText(locator) {
        return $(locator).getText();
    }

    static get TIMES() {
        return TIMES;
      }
    
    static get DIRECTION() {
        return DIRECTION;
    }

    static getCoordinates(deviceSize) {
        const { height, width } = deviceSize;
        const bottomYCoordinate = height * 0.9;
        const topYCoordinate = height * 0.1;
        const rightXCoordinate = width * 0.9;
        const leftXCoordinate = height * 0.1;
        const startXCoordinate = width / 2;
        const startYCoordinate = height / 2;
        return {
            bottomYCoordinate,
            topYCoordinate,
            startXCoordinate,
            rightXCoordinate,
            leftXCoordinate,
            startYCoordinate,
        };
    }
    
    static swipeUp(deviceSize) {
        const {
            bottomYCoordinate,
            topYCoordinate,
            startXCoordinate,
        } = this.getCoordinates.call(this, deviceSize);
        browser.touchAction([
            { action: 'longPress', x: startXCoordinate, y: bottomYCoordinate },
            { action: 'moveTo', x: startXCoordinate, y: topYCoordinate },
            //'wait(2000)',
            'release'
        ])
    }
    
    static swipeDown(deviceSize) {
        const {
            bottomYCoordinate,
            topYCoordinate,
            startXCoordinate,
        } = this.getCoordinates.call(this, deviceSize);
            browser.touchAction([
                { action: 'longPress', x: startXCoordinate, y: topYCoordinate },
                { action: 'moveTo', x: startXCoordinate, y: bottomYCoordinate },
                'wait(2000)',
                'release'
            ])
    }
    
    static swipeLeft(deviceSize) {
        const {
            rightXCoordinate,
            leftXCoordinate,
            startYCoordinate,
        } = getCoordinates.call(this, deviceSize);
            browser.touchAction([
                { action: 'longPress', x: rightXCoordinate, y: startYCoordinate },
                { action: 'moveTo', x: leftXCoordinate, y: startYCoordinate },
                'wait(2000)',
                'release'
            ])
    }
    
    static swipeRight(deviceSize) {
        const {
            rightXCoordinate,
            leftXCoordinate,
            startYCoordinate,
        } = getCoordinates.call(this, deviceSize);
            browser.touchAction([
                { action: 'longPress', x: leftXCoordinate, y: startYCoordinate },
                { action: 'moveTo', x: rightXCoordinate, y: startYCoordinate },
                'wait(2000)',
                'release'
            ])
    }
    
    static swipe(direction, numberOfTimes = TIMES.ONCE) {
        console.log(numberOfTimes)
        const deviceSize = driver.getWindowSize();
        let swipeFunction = {};
        // eslint-disable-next-line default-case
        switch (direction) {
            case DIRECTION.UP:
                swipeFunction = this.swipeUp;
                break;
            case DIRECTION.DOWN:
                swipeFunction = swipeDown;
                break;
            case DIRECTION.LEFT:
                swipeFunction = swipeLeft;
                break;
            case DIRECTION.RIGHT:
                swipeFunction = swipeRight;
                break;
        }
        for (let i = 0; i < numberOfTimes; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            swipeFunction.call(this, deviceSize);
        }
        return;
    }


}

module.exports = ActionHelper;
