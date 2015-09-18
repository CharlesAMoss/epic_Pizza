describe('Pizza', function() {

    it("creates a new pizza with the given specifications", function() {
        var testPizza = new Pizza("Pie", 1);

        expect(testPizza.pizzaSize).to.equal("Pie");
        expect(testPizza.pizzaQuantity).to.equal(1);
        expect(testPizza.pizzaTopping).to.eql([]);
    });

    it("calculates the price for one small size no toppings", function() {
        var testPizza = new Pizza("Slice", 1);
        var price = 2.50;
        var total = testPizza.size();

        expect(total).to.equal(price);
    });

    it("calculates the price for one large size no toppings", function() {
        var testPizza = new Pizza("Pie", 1);
        var price = 16.00;
        var total = testPizza.size();

        expect(total).to.equal(price);
    });

    it("calculates the price for one giant size no toppings", function() {
        var testPizza = new Pizza("Sicilian", 1);
        var price = 20.00;
        var total = testPizza.size();

        expect(total).to.equal(price);
    });

    it("calculates the price for two large size no toppings", function() {
        var testPizza = new Pizza("Pie", 2);
        var price = (16.00 * 2);
        var total = testPizza.quantity();

        expect(total).to.equal(price);
    });

    it("calculates the price for 1 large size with 1 topping", function() {
        var testPizza = new Pizza("Pie", 1);
        var testTopping = new Topping("pepperoni");
        testPizza.pizzaTopping.push(testTopping);

        var price = (16.00 + 2.00);
        var total = testPizza.size() + testPizza.topping();

        expect(total).to.equal(price);
    });

    it("calculates the price for 1 large size with 2 toppings", function() {
        var testPizza = new Pizza("Pie", 1);
        var testTopping = new Topping("pepperoni");
        var testTopping2 = new Topping("mushroom");
        testPizza.pizzaTopping.push(testTopping);
        testPizza.pizzaTopping.push(testTopping2);

        var price = (16.00 + 4.00);
        var total = testPizza.size() + testPizza.topping();

        expect(total).to.equal(price);
    });

    it("calculates the price for 2 large size with 1 topping", function() {
        var testPizza = new Pizza("Pie", 2);
        var testTopping = new Topping("pepperoni");
        testPizza.pizzaTopping.push(testTopping);


        var price = (16.00 + 2.00) * 2;
        var total = testPizza.size() + testPizza.topping();

        expect(total).to.equal(price);
    });




});

describe('Topping', function( ) {
    it("creates a new Topping with the given specifications", function() {

    var testPizza = new Pizza("Pie", 1);
    var testTopping = new Topping("pepperoni");
    testPizza.pizzaTopping.push(testTopping);

    expect(testPizza.pizzaTopping).to.have.length(1);
    });

});
