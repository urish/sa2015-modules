export function put(item) {
	var newElement = document.createElement('span');
	newElement.textContent = item;
	newElement.className = 'item';
	document.getElementById('kitchen-table').appendChild(newElement);
}
