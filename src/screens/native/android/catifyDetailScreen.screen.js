class CatifyDetailScreen{
    constructor(){
        this.catListDetailScreen =
            '//android.widget.TextView[@text="Cat Detail"]';
            this.breedDetailImage =
            '//android.widget.ImageView[@resource-id="com.catify.catify:id/detailImage"]';
        this.breedDetailName =
            '//android.widget.TextView[contains(@text,"Name")]';
        this.breedTemperament =
            '//android.widget.TextView[contains(@text,"Temperament")]';
        this.breedEnergyLevel = '//android.widget.TextView[contains(@text,"Energy")]';
    }
}

module.exports = new CatifyDetailScreen();
