global.$ = global.jQuery = require('jquery');
global.bootstrap = require('bootstrap');

import { App } from 'react-es6-commons';
import './module/Login';

class MyApp extends App {

    onDelayedStart(startNow) {

        $(document).ready(() => {
            startNow();
        });
    }
}

// start app
export default new MyApp();