import {makeCoffee} from './CoffeeMachine.js';
import {bake} from './Oven.js';
var breakfastCounter = 0;

export function make() {
	makeCoffee();
	bake('cake');

	breakfastCounter++;
	console.log('Breakfast #' + breakfastCounter + ' is being served !');
}
