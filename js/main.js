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

Pizza.prototype.topping = function() { // uses length of Pizza.pizzaTopping array to calculate toppings cost
    if (this.pizzaSize === "Sicilian") {
        return this.pizzaTopping.length * 2.50;
    } else if (this.pizzaSize === "Pie") {
        return this.pizzaTopping.length * 2.00;
    } else {
        return this.pizzaTopping.length * 0.50;
    }
};

Pizza.prototype.quantity = function() {
    var cost = ((this.size(this.pizzaSize) + this.topping(this.pizzaSize)) * this.pizzaQuantity).toFixed(2);
    return cost; // returns total price of pizza object
};

function Topping(pizzaTopping) {
    this.pizzaTopping = pizzaTopping;
}

$(document).ready(function() {
    $("#add-topping").click(function() { // sets an on click event for "Add Another Topping"
        $(".topping").clone().last().appendTo("#new-topping"); // adds a clone of topping select form mark up
    });

    $("form#order-pizza").submit(function(event) { // sets an on click event for "order" submit button
        event.preventDefault();

        var size = $("input[name=radioSize]:checked").val(); // gets the input form "Size" radio button
        var quantity = $("input[name=pizza-quantity]").val(); // gets the input from "How Many"

        var newPizza = new Pizza(size, quantity); // instantiate an object

        $(".topping").each(function() {
            var pickTopping = $(this).find("#toppings-list option:selected").val(); // gets the input from "Topping" select form
            if (pickTopping !== "Cheese") { // if topping does not equal option "cheese"
                var newTopping = new Topping(pickTopping); // instantiate an object
                newPizza.pizzaTopping.push(newTopping); // add collected input to an array that is accessable by pizza object
            }
            $('#order-pizza')[0].reset(); // resets the form so you can add a pizza
        });


        $("ul#order").append("<li><span class='pizza'>Pizza " + newPizza.pizzaSize + "</span></li>"); // appends a list with clickable class 'pizza'

        $(".pizza").last().click(function() {
            $("#show-pizza").fadeIn("slow"); // visual effect fadeIn
            $("#show-pizza h2").text(newPizza.pizzaSize); // displays pizza's size
            $(".quantity").text(newPizza.pizzaQuantity); // displays how many
            $("ul#toppings").text(""); // sets up a place for the toppings list to go
            for (var topping of newPizza.pizzaTopping) {
                $("ul#toppings").append("<li>" + topping.pizzaTopping + "</li>"); // appends the toppings for Pizza.pizzaTopping array
            }
            $("#cost").text("$ " + newPizza.quantity()); // displays cost of pizza order
        });

        $(".topping").not(':first').remove(); // strikes any addtional toppings forms that have been added

    });
});
