"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseContact = (function () {
    function BaseContact(id) {
    }
    return BaseContact;
}());
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact() {
        _super.call(this, 123);
    }
    Contact.prototype.sendEmail = function () {
    };
    return Contact;
}(BaseContact));
function blabla(c) {
    c.sendEmail();
}
//# sourceMappingURL=main.js.map