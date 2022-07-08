const { config } = require('./wdio.conf');

config.capabilities = [
    {
        'browserstack.user': 'sabareeshuthayab1',
        'browserstack.key': 'xQCVbb4rR5s4EwabYaeK',
        platformName: 'Android',
        build: 'Android CI Push',
        name: 'Sab-Android-CI-Push',
        app: 'bs://52c1fde59b9a46d1882d6c2072d7fd7b01ac09f6',
        deviceName: 'Samsung Galaxy S21',
        os_version: '11.0',
        'browserstack.debug': true,
        'browserstack.appium_version': '1.21.0',
        realMobile: true,
    },
    {
        'browserstack.user': 'sabareeshuthayab1',
        'browserstack.key': 'xQCVbb4rR5s4EwabYaeK',
        platformName: 'Android',
        build: 'Android CI Push',
        name: 'Sab-Android-CI-Push',
        app: 'bs://52c1fde59b9a46d1882d6c2072d7fd7b01ac09f6',
        deviceName: 'Samsung Galaxy S10',
        os_version: '9.0',
        'browserstack.debug': true,
        'browserstack.appium_version': '1.21.0',
        realMobile: true,
    },
];
// // Code to support common capabilities
//  exports.config.capabilities.forEach(function(caps) {
//      for(var i in exports.config.commonCapabilities) {
//          caps[i] = caps[i] || exports.config.commonCapabilities[i];
//      }
//  });

config.cucumberOpts.tagExpression = '@androidBSP'; // pass tag to run tests specific to android
exports.config = config