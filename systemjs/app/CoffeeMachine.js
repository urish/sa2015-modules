﻿import {put} from './KitchenTable.js';

var coffee = '';

export function makeCoffee() {
	coffee = '☕';
	setTimeout(serve, 500);
}

export function serve() {
	put(coffee);
}
