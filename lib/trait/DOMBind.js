import Injectable from '../Injectable';
import $ from 'jquery';

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
        return $(selector)[0];
    }
}

global.DOMBind = DOMBind;

export default DOMBind;