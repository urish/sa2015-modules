define(['./CoffeeMachine', './Oven'], function (CM, Oven) {
    var breakfastCounter = 0;

    function make() {
        CM.makeCoffee();
        Oven.bake('cake');
        breakfastCounter++;
    }

    return {
        make: make
    };
});
