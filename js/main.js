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

Pizza.prototype.topping = function() {
    if (this.pizzaSize === "Sicilian") {
        return this.pizzaTopping.length * 2.50;
    } else if (this.pizzaSize === "Pie") {
        return this.pizzaTopping.length * 2.00;
    } else {
        return this.pizzaTopping.length * 0.50;
    }
};

function Topping(pizzaTopping) {
    this.pizzaTopping = pizzaTopping;
}
