(function() {

    function HomeComponent() {
        console.log("Home ctor");

        console.log(this.list);

        this.message = "Hello";

        this.contacts = [
            {name: "Ori"},
            {name: "Roni"},
        ];
    }

    HomeComponent.prototype.$postLink = function() {
        this.list.dump();
    }

    HomeComponent.prototype.add = function() {

        if(!this.name) {
            return;
        }

        this.contacts.push({
            name: this.name,
        });
    }

    HomeComponent.prototype.deleteContact = function(contact, index) {
        if(confirm("Delete contact " + contact.name + "?")) {
            this.contacts.splice(index, 1);
        }
    }

    angular.module("myApp").directive("home", function () {
        return {
            controller: HomeComponent,
            compile: function() {
                console.log("HomeComponent COMPILE");

                return {
                    pre: function() {
                        console.log("HomeComponent PRELINK");
                    },
                    post: function() {
                        console.log("HomeComponent POSTLINK");

                        //this.list.dump();
                    }
                };
            },
            scope: {},
            controllerAs: "ctrl",
            templateUrl: "home.html",
        };
    });

})();
