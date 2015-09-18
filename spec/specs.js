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


});
