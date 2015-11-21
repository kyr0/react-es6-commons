import Injectable from '../Injectable';

class DOMBind extends Injectable {

    constructor() {
        super();
    }

    onInject(target) {

        if (this.onDOMBind) {
            this.onDOMBind();
        }
    }

    static bind(selector) {

        if ($ || jQuery) {

            return ($||jQuery)(selector)[0];

        } else if (document.querySelector) {

            return document.querySelector(selector);

        } else {

            throw new Error('No native browser support for selecting DOM elements available. Please include jQuery.');
        }
    }
}

global.DOMBind = DOMBind;

export default DOMBind;