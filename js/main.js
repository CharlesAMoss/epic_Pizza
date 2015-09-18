function Pizza(pizzaSize, pizzaQuantity, pizzaTopping) {
    this.pizzaSize = pizzaSize;
    this.pizzaQuantity = pizzaQuantity;
    this.pizzaTopping = [];
}

Pizza.prototype.total = function() {

    if ( this.pizzaSize === "Pie" ) {
        return 16.00;
    }
        return 2.50;
};
