describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza("Large Pie", 1);
    expect(testPizza.pizzaSize).to.equal("Large Pie");
    expect(testPizza.pizzaQuantity).to.equal(1);
    expect(testPizza.pizzaTopping).to.eql([]);
  });
});
