(function() {

    function ListViewComponent($attrs, $scope) {
        console.log("ListViewComponent ctor");

        this.items = null;

        if($attrs.componentName) {
            console.log("Component name: " + $attrs.componentName);

            $scope.$parent.ctrl[$attrs.componentName] = this;
        }
    }
    
    ListViewComponent.prototype.deleteItem = function(item, index) {
        //
        //  Raise the event
        //
        this.onItemDelete({item: item, index: index});
    }

    ListViewComponent.prototype.dump = function() {
        console.log("ListViewComponent dump");
    }

    angular.module("myApp").directive("listView", function () {
        return {
            controller: ListViewComponent,
            compile: function() {
                console.log("ListViewComponent COMPILE");

                return {
                    pre: function() {
                        console.log("ListViewComponent PRELINK");
                    },
                    post: function() {
                        console.log("ListViewComponent POSTLINK");
                    }
                };
            },
            scope: {
                items: "<",
                onItemDelete: "&",
            },
            controllerAs: "ctrl",
            bindToController: true,
            template: require("./listView.html!text"),
            styles: require("./listView.css!css"),
        };
    });

})();
