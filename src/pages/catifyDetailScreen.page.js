const ActionHelper = require('../helpers/actionHelpers');
require('chai').should();

class catifyDetailScreen {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/catifyDetailScreen.screen.js`);
    }

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
    }

    verifyCatDetailsPage() {
        ActionHelper.click(this.getObjectLocator().catListDetailScreen);
    }

    verifyCatDetailImage() {
        ActionHelper.isVisible(this.getObjectLocator().breedDetailImage);
    }

    tapBackButton() {
        ActionHelper.backButton();
    }

    verifyCatDetailName() {
        let detailName = ActionHelper.getText(this.getObjectLocator().breedDetailName);
        expect(detailName).toBeDefined();
    }

    verifyCatDetailTemperament() {
        let detailTemp = ActionHelper.getText(this.getObjectLocator().breedTemperament);
        expect(detailTemp).toContain('Temperament');
    }

    verifyCatDetailEnergy() {
        let detailEnergy = ActionHelper.getText(this.getObjectLocator().breedEnergyLevel);
        expect(detailEnergy).toContain('Energy');
    }

}

module.exports = new catifyDetailScreen;
