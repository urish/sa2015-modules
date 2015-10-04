var KitchenTable = require('./KitchenTable');
var coffee = '';

exports.makeCoffee = function () {
	coffee = '☕';
	setTimeout(serve, 500);
};

function serve() {
	KitchenTable.put(coffee);
}
exports.serve = serve;
