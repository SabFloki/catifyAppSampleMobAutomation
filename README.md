# APPIUM-Cucumber-BDD-WDIO

Sample Project and cat app to run native and browser for android and ios using cucumber with page object pattern.

Currently added android app for sample test run.

|          | WebdriverIO | Android | iOS |
|   :---   | :---: | :---: | :---:   |
| Local | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Browserstack | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| CI - Github Actions | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| APPIUM<!-- GEN:appium-version -->1.21.0<!-- GEN:stop -->  | :white_check_mark: | :white_check_mark: | :white_check_mark: |

## Based on

- WebdriverIO v7
- cucumber v7
- Node version 10.16 or higher
- Appium
- Allure Reporting

## Supports

- Native Android and iOS apps
- Android Chrome browser
- iOS Safari browser
- Supports Page Object Model
- Contains sample test scenarios in cucumber
- Supports multiple cucumber html reports
- Run scripts in parallel devices on Browserstack

## Source and steps

- Install dependencies using `npm i` in the terminal.

- Update the deviceName and platFormVersion in `config/android.info.js` and `config/ios.info.js` respectively.

- Execute `npm run ios` to run ios native app

- Execute `npm run iosBrowser` to run ios safari browser

- Execute `npm run android` to run android native app

- Execute `npm run androidBrowser` to run android chrome browser

- Execute `npm run lint` to run eslint
