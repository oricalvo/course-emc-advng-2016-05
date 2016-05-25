var appModule = require("app");

appModule.factory("contactService", function() {
    return {
        getAll: function() {
            return [
                {id:1, name: "Ori"},
                {id:2, name: "Roni"},
            ];
        }
    };
});
