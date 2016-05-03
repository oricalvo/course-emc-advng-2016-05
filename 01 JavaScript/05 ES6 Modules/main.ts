import {doSomething} from "./module1";
import * as module2 from "./module2";

class BaseContact {
    constructor(id) {
    }
}

class Contact extends BaseContact {
    constructor() {
        super(123);
    }

    sendEmail() {
    }
}

function blabla(c: Contact) {
    c.sendEmail();
}

