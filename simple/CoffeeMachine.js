﻿define('CoffeeMachine', ['KitchenTable'], function (kitchenTable) {
    var coffee = '';

    function makeCoffee() {
        coffee = '☕';
		setTimeout(serve, 500);
    }

    function serve() {
        kitchenTable.put(coffee);
    }

    return {
        makeCoffee: makeCoffee,
        serve: serve
    };
});
