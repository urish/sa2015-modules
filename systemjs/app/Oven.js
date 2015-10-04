import {put} from './KitchenTable.js';

var ovenContent = '';

var products = {
	cake: '🎂',
	pizza: '🍕'
};

export function bake(product) {
	ovenContent = products[product];
	setTimeout(serve, 1000);
}

export function serve() {
	put(ovenContent);
}
