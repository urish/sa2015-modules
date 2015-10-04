define(['KitchenTable'], function (KitchenTable) {
	var ovenContent = '';

	var products = {
		cake: '🎂',
		pizza: '🍕'
	};

	function bake(product) {
		ovenContent = products[product];
		setTimeout(serve, 1000);
	}

	function serve() {
		KitchenTable.put(ovenContent);
	}


	return {
		bake: bake,
		serve: serve
	};
});
