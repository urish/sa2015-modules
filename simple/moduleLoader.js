define = (function () {
    'use strict';

    function loadModule(url, callback) {
        var scriptElm = document.createElement('script');
        scriptElm.src = url;
        scriptElm.onload = callback;
        document.head.appendChild(scriptElm);
    }

    var loadedModules = {};
    var pending = {};

    function define(name, dependencies, factory) {
        var waiting = dependencies.length;

        function checkReady() {
            if (waiting === 0) {
                var args = dependencies.map(function (dependency) {
                    return loadedModules[dependency];
                });
                loadedModules[name] = factory.apply(this, args);
                (pending[name] || []).forEach(function (callback) {
                    callback();
                });
            }
        }

        function dependencyReady() {
            waiting--;
            checkReady();
        }

        dependencies.forEach(function (dependency) {
            if (loadedModules[dependency]) {
                dependencyReady();
            } else if (pending[dependency]) {
                pending[dependency].push(dependencyReady);
            } else {
                loadModule(dependency + '.js');
                pending[dependency] = [dependencyReady];
            }
        });

        checkReady();
    }

    return define;
})();