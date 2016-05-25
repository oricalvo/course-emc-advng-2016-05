var appModule = require("app");

appModule.factory("serviceLoader", function($q, $injector) {
    return {
        load: function(serviceName) {
            var deferred = $q.defer();
            
            System.import(serviceName).then(function() {
                var service = $injector.get(serviceName);
                deferred.resolve(service);
            });
            
            return deferred.promise;
        }
    };
});
