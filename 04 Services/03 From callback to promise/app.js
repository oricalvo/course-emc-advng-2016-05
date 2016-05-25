var module = angular.module("myApp", []);

module.config(function($provide) {
    $provide.value("di", {
        register: function(name, func) {
            $provide.factory(name, func);
        },
    });
});

module.run(function($injector, di) {
    di.resolve = function(name) {
        return $injector.get(name);
    }
});
