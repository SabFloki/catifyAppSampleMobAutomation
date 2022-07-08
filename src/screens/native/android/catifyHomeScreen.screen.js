class CatifyHomeScreen{
    constructor(){
        this.catListHomeScreen =
            '//android.widget.TextView[@text="Cat List"]';
        this.breedName =
            '//android.widget.TextView[@resource-id="com.catify.catify:id/itemBreedName"]';
        this.breedImage =
            '//android.widget.ImageView[@resource-id="com.catify.catify:id/itemBreedImage"]';
        this.breedDetailImage = '//android.widget.ImageView[@resource-id="com.catify.catify:id/detailImage"]';
        this.breedImageList = '//androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.ImageView[@resource-id="com.catify.catify:id/itemBreedImage"]';
        this.breedNameList = '//androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.TextView[@resource-id="com.catify.catify:id/itemBreedName"]';
       //this.catName = `//*[@text=${value}]`
    }
}

module.exports = new CatifyHomeScreen();
