define(['./CoffeeMachine', './Oven'], function (CM, Oven) {
    var breakfastCounter = 0;

    function make() {
        CM.makeCoffee();
        Oven.bake('cake');

		breakfastCounter++;
		console.log('Breakfast #' + breakfastCounter + ' is being served !');
    }

    return {
        make: make
    };
});
