import EventBus from './event/Bus';
import React from 'react';
import Trait from './Trait';
import DOMBind from './trait/DOMBind';

import { create } from 'jss'
import camelCase from 'jss-camel-case';
import vendorPrefixer from 'jss-vendor-prefixer'

// JSS stylesheets
var jss = create();
jss.use(vendorPrefixer);
jss.use(camelCase);

// e.g. extend React.Component
export default class Component extends React.Component {

    constructor(props) {

        super(props);

        // eager DOMBind
        Trait.inject(this, DOMBind);
    }

    componentWillMount() {

        // late DOMBind
        if (this.onDOMBind) {
            this.onDOMBind();
        }
    };

    _createStylesheet() {

        if (this.stylesheet && !this._styleSheetApplied) {

            this.stylesheet = jss.createStyleSheet(this.stylesheet);
            this.stylesheet.attach();

            this._styleSheetApplied = true;
        }

        if (this.stylesheet && this.stylesheet.classes) {
            return this.stylesheet;
        }
    }

    _getDefaultJSX() {
        return <strong>Warning: The "template" property is missing in a View extending Component.</strong>;
    }

    render() {


        // JSS processing
        var jssClasses,
            stylesheet = this._createStylesheet();

        if (stylesheet) {
            jssClasses = stylesheet.classes;
        }

        var tpl = this.template,
            args = [
                this.state || {},
                jssClasses || {},
                this.translation || {}
            ];

        if (!tpl) {
            tpl = this._getDefaultJSX
        }
        return tpl.bind(this).apply(this, args);
    }
}