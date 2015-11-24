import { AppModule } from 'react-es6-commons';
import React from 'react';
import ReactDOM from 'react-dom';

import LoginView from '../view/Login';

class Login extends AppModule {

    onDOMBind() {
        this.rootElement = DOMBind.bind('#viewport');
    }

    onRoute() {
        router.add('#', this);
        router.add('#login', this);
    }

    onRouteMatch() {
        ReactDOM.render(<LoginView />, this.rootElement);
    }
}
export default new Login();