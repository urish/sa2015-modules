define('KitchenTable', [], function () {

	function put(item) {
		var newElement = document.createElement('span');
		newElement.textContent = item;
		newElement.className = 'item';
		document.getElementById('kitchen-table').appendChild(newElement);
	}

	return {
		put: put
	};
});
