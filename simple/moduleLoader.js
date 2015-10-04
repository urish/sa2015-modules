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
		var missingDependencies = dependencies.filter(function (depenency) {
			return !loadedModules[depenency];
		});

		var waiting = missingDependencies.length;

		if (waiting === 0) {
			callback();
			return;
		}

		function dependencyReady() {
			waiting--;
			if (waiting === 0) {
				callback();
			}
		}

		missingDependencies.forEach(function (dependency) {
			if (!pendingModules[dependency]) {
				loadModule(dependency + '.js');
				pendingModules[dependency] = [];
			}
			pendingModules[dependency].push(dependencyReady);
		});
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
