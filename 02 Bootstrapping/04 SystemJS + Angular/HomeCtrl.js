var appModule = require("app");
require("./serviceLoader");

appModule.controller("HomeCtrl", function($scope, serviceLoader) {
    $scope.message = "Hello SystemJS + Angular";

    //$injector.get("blabla");
    
    //$scope.contacts = contactService.getAll();

    $scope.showContacts = function() {
        serviceLoader.load("contactService").then(function(contactService) {
            $scope.contacts = contactService.getAll();
        });
    }
});
