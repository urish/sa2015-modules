define = (function () {
	'use strict';

	function loadModule(url, callback) {
		var scriptElm = document.createElement('script');
		scriptElm.src = url;
		scriptElm.onload = callback;
		document.head.appendChild(scriptElm);
	}

	var loadedModules = {};
	var pendingModules = {};

	function ensureDependencies(dependencies, callback) {
		var waiting = dependencies.length;

		function dependencyReady() {
			waiting--;
			if (waiting === 0) {
				callback();
			}
		}

		dependencies.forEach(function (dependency) {
			if (loadedModules[dependency]) {
				waiting--;
			} else if (pendingModules[dependency]) {
				pendingModules[dependency].push(dependencyReady);
			} else {
				loadModule(dependency + '.js');
				pendingModules[dependency] = [dependencyReady];
			}
		});

		if (waiting === 0) {
			callback();
		}
	}

	function moduleReady(id) {
		if (pendingModules[id]) {
			pendingModules[id].forEach(function (callback) {
				callback();
			})
		}
	}

	function define(id, dependencies, factory) {
		ensureDependencies(dependencies, function () {
			var args = dependencies.map(function (dependency) {
				return loadedModules[dependency];
			});
			loadedModules[id] = factory.apply(this, args);
			moduleReady(id);
		});
	}

	return define;
})();
