module.controller("HomeCtrl", function($scope, $messageBox) {
    $scope.delete = function() {
        $messageBox.confirm("Continue ?",
            function() {
            },
            function() {
            });
    }
});
