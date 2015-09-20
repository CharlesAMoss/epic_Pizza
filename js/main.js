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

Pizza.prototype.topping = function() {
    if (this.pizzaSize === "Sicilian") {
        return this.pizzaTopping.length * 2.50;
    } else if (this.pizzaSize === "Pie") {
        return this.pizzaTopping.length * 2.00;
    } else {
        return this.pizzaTopping.length * 0.50;
    }
};

Pizza.prototype.quantity = function() {
    return ((this.size(this.pizzaSize) + this.topping(this.pizzaSize)) * this.pizzaQuantity).toFixed(2);
};

function Topping(pizzaTopping) {
    this.pizzaTopping = pizzaTopping;
}

$(document).ready(function() {
    $("#add-topping").click(function() {
        $(".topping").clone().last().appendTo("#new-topping");

    });

    $("form#order-pizza").submit(function(event) {
        event.preventDefault();

        var size = $("input[name=radioSize]:checked").val();
        var quantity = $("input[name=pizza-quantity]").val();

        var newPizza = new Pizza(size, quantity);

        $(".topping").each(function() {
            var pickTopping = $(this).find("#toppings-list option:selected").val();
            if ( pickTopping !== "Cheese" ){
                var newTopping = new Topping(pickTopping);
                newPizza.pizzaTopping.push(newTopping);
            }
        $('#order-pizza')[0].reset();
        });


        $("ul#order").append("<li><span class='pizza'>Pizza " +  newPizza.pizzaSize + "</span></li>");

        $(".pizza").last().click(function() {
            $("#show-pizza").fadeIn("slow");
            $("#show-pizza h2").text(newPizza.pizzaSize);
            $(".quantity").text(newPizza.pizzaQuantity);
            $("ul#toppings").text("");
            $("#cost").text("$ " + newPizza.quantity());
            for ( var topping of newPizza.pizzaTopping ) {
                $("ul#toppings").append("<li>" + topping.pizzaTopping + "</li>");
            }

        });

        $(".topping").not(':first').remove();

        //resetFields();
    });
});
