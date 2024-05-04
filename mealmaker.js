const foodMenu = {
    ['Main course'] : [],
    _appetizers : [],
    _desserts : [],
 
 // Getters
get appetizer() {
    return this._appetizers;
},

get tMainCourse() {
    return this["Main course"];
},

get dessert() {
    return this._desserts;
},


// Geenerate random Meal
generateRandomMeal() {
    const randomNumber = Math.floor(Math.random() * this.appetizer.length);
    const mainCourse = this.tMainCourse[randomNumber];
    const mealAppetizer = this.appetizer[randomNumber];
    const mealDessert = this.dessert[randomNumber];
    const totalPrice = mainCourse.price + mealAppetizer.price + mealDessert.price;

    return `Today's special: ${mainCourse.name}, ${mealAppetizer.name}, ${mealDessert.name} 
Total price: $${totalPrice}`;
},

// Add dish to Appetizers Function
    addDishToAppetizers(name, price) {
        const appetizers = {
            name,
            price,
        }

        foodMenu._appetizers.push(appetizers);
    },    

// Add dish to Main Course Function
addDishToMainCourse(name, price) {
    const mainCourse = {
        name,
        price,
    }

    foodMenu["Main course"].push(mainCourse);
},

// Add dish to Dessert Function
addDishToDesserts(name, price) {
    const dessertss = {
        name,
        price,
    }

    foodMenu._desserts.push(dessertss);
}
};

// Create a Main Course Dish
foodMenu.addDishToMainCourse('Chilli con carne recipe', 25);
foodMenu.addDishToMainCourse('Spaghetti Bolognese', 22);
foodMenu.addDishToMainCourse('Slowly Baked Steak', 19);

// Create an Appetizer Dish
foodMenu.addDishToAppetizers('Potato Dip', 12);
foodMenu.addDishToAppetizers('Loaded Bread', 9);
foodMenu.addDishToAppetizers('Spicy Beef', 12);

// Create a Dessert Dish
foodMenu.addDishToDesserts('Puddings', 7);
foodMenu.addDishToDesserts('Cookies', 12);
foodMenu.addDishToDesserts('CocoNut Cake', 19);

console.log(foodMenu.generateRandomMeal());
