function Pizza(pizzaSize, pizzaQuantity, pizzaTopping) {
    this.pizzaSize = pizzaSize;
    this.pizzaQuantity = pizzaQuantity;
    this.pizzaTopping = [];
}

Pizza.prototype.total = function() {

    if ( this.pizzaSize === "Sicilian" ) {
        return 20.00;
    } else if ( this.pizzaSize === "Pie" ) { 
        return 16.00;
    } else {
        return 2.50;
    }


};
