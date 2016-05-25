module.controller("HomeCtrl", function($scope, $timeout, $q) {
    delay(2000).then(function() {
        console.log("Tick");
    });
    
    function delay(interval) {
        var deferred = $q.defer();
        
        $timeout(function() {
            deferred.resolve();
        }, interval);
        
        return deferred.promise;
    }
});
