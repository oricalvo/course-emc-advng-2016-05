class ListViewComponent {
    items;
    onItemDelete;

    constructor($attrs, $scope) {
        console.log("ListViewComponent ctor");

        this.items = null;

        if ($attrs.componentName) {
            console.log("Component name: " + $attrs.componentName);

            $scope.$parent.ctrl[$attrs.componentName] = this;
        }
    }

    deleteItem(item, index) {
        //
        //  Raise the event
        //
        this.onItemDelete({item: item, index: index});
    }

    dump() {
        console.log("ListViewComponent dump");
    }

    rename() {
        alert("ddd");
    }
}

angular.module("myApp").directive("listView", function () {
    return {
        controller: ListViewComponent,
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
