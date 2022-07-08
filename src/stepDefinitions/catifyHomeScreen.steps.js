const { Given, When, Then } = require('@cucumber/cucumber');
const { default: AllureReporter } = require('@wdio/allure-reporter');
const catifyHomeScreen = require('./../pages/catifyHomeScreen.page');
const catifyDetailScreen = require('./../pages/catifyDetailScreen.page');


Given(/^I launch the app$/, () => {
    catifyHomeScreen.launchApp()
});

When(/^I want to see a cats list page$/, () => {
    catifyHomeScreen.verifyCatListPage()
});

Then(/^I should see name and image for list of cats$/, () => {
    catifyHomeScreen.toGetCatList();
    catifyHomeScreen.toGetImageList();
    catifyHomeScreen.swipeUpAfterCatAndImagesCapture();
});

Then(/^errors should be seen if API is down$/, () => {
    catifyHomeScreen.verifyifAPIDown()
});

When(/^I tap on (.*) from the list$/, (cat) => {
    catifyHomeScreen.tapCatList(cat);
    AllureReporter.addStep('Cat - ' + cat + ' is tapped')
});

Then(/^I should see the detailed information of that cat$/, () => {
    catifyDetailScreen.verifyCatDetailImage();
    AllureReporter.addStep('Cat Image is displayed')
    catifyDetailScreen.verifyCatDetailName();
    AllureReporter.addStep('Cat Name is displayed')
    catifyDetailScreen.verifyCatDetailEnergy();
    AllureReporter.addStep('Cat Energy is displayed')
    catifyDetailScreen.verifyCatDetailTemperament();
    AllureReporter.addStep('Cat Temperament is displayed')
});

When(/^I tap on back button$/, () => {
    catifyDetailScreen.tapBackButton();
});

Then(/^I should see the list of cats page$/, () => {
    catifyHomeScreen.verifyCatListDisplayed();
    AllureReporter.addStep('Cat List on home screen is displayed')
});