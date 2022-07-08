const { config } = require('./wdio.conf');

config.capabilities = [
    {
        'browserstack.user': process.env.BROWSER_STACK_USER,
        'browserstack.key': process.env.BROWSER_STACK_KEY,
        platformName: 'Android',
        build: 'Cat Android',
        os_version: '11.0',
        name: 'Sab-Android-IB-Auto',
        deviceName: 'Samsung Galaxy S21',
        app: process.env.ANDROID_BROWSER_STACK_APP,
        'browserstack.debug': true,
        'browserstack.appium_version': '1.21.0',
        realMobile: true,
    }
];

config.cucumberOpts.tagExpression = '@androidBS'; // pass tag to run tests specific to android

exports.config = config;