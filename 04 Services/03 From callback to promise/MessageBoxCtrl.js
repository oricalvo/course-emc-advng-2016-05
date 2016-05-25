module.controller("MessageBoxCtrl", function($scope, di) {
    var me = this;
    di.register("$messageBox", function(){return me;});

    $scope.yes = function() {
    }
    
    $scope.no = function() {
    }
    
    this.confirm = function(text, yes, no) {
        $scope.active = true;
        $scope.text = text;
    }
});
