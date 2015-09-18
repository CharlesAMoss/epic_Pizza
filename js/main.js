function Pizza(pizzaSize, pizzaQuantity) {
    this.pizzaSize = pizzaSize;
    this.pizzaQuantity = pizzaQuantity;
    this.pizzaTopping = [];
}

Pizza.prototype.size = function() {
    if (this.pizzaSize === "Sicilian") {
        return 20.00;
    } else if (this.pizzaSize === "Pie") {
        return 16.00;
    } else {
        return 2.50;
    }
};

Pizza.prototype.quantity = function() {
    return this.size(this.pizzaSize) * this.pizzaQuantity;
};

function Topping(pizzaTopping) {
    this.pizzaTopping = pizzaTopping;
}



Pizza.prototype.topping = function() {

};
