var KitchenTable = require('./KitchenTable');

var ovenContent = '';

var products = {
	cake: '🎂',
	pizza: '🍕'
};

exports.bake = function (product) {
	ovenContent = products[product];
	setTimeout(serve, 1000);
};

function serve() {
	KitchenTable.put(ovenContent);
};
exports.serve = serve;
