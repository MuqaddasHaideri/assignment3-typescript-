//part 1
// Basic Arrays - Product Inventory 
import inquirer from 'inquirer';
// Create an array named products containing at least three product objects. Each 
// product object should include a name, price, and inventory details. 
let product1 = {
    name: "Mug",
    price: 200,
    inventory: {
        stock: 10,
        colorOption: ["pink", "gray", "Brown"]
    }
};
let product2 = {
    name: "Shoes",
    price: 1000,
    inventory: {
        stock: 5,
        colorOption: ["black", "white", "gray"]
    }
};
let product3 = {
    name: "bag-Pack",
    price: 200,
    inventory: {
        stock: 7,
        colorOption: ["green", "pink", "blue"]
    }
};
console.log(product1);
console.log(product2);
console.log(product3);
// Implement a function named changeColor that takes a product object and a new 
// color as input. This function should update the color property of the product and 
// adjust the price based on the new color (implement your own logic, e.g., increase by 
// 10% for red, decrease by 5% for blue). 
//================================================================
function PriceAdjust(Product, newColor) {
    switch (newColor) {
        case 'red':
            Product.price *= 1.0;
            break;
        case 'black':
            Product.price *= 4.0;
            break;
        case 'blue':
            Product.price *= 5.0;
            break;
    }
}
//+================================================================
async function changeColor() {
    const newColor = (await inquirer.prompt({
        name: "newColor",
        type: "string",
        message: "Enter the color for your product:"
    })).newColor;
    const chooseTheProduct = (await inquirer.prompt({
        name: "chooseTheProduct",
        type: "list",
        message: "choose in which product you want to add the color:",
        choices: ['Mug', 'Shoes', 'BagPack']
    })).chooseTheProduct;
    let selectedProduct;
    switch (chooseTheProduct) {
        case 'Mug':
            selectedProduct = product1;
            break;
        case 'Shoes':
            selectedProduct = product2;
            break;
        case 'BagPack':
            selectedProduct = product3;
            break;
        default:
            console.log("Invalid product choice");
            return;
    }
    if (selectedProduct) {
        selectedProduct.inventory.colorOption.push(newColor);
        PriceAdjust(selectedProduct, newColor);
        console.log(selectedProduct);
    }
}
//Display each product's name, price, stock, and available colors. Iterate through the 
// products array and print each product's details.
changeColor();
