import { Component } from 'react-es6-commons';
import CryptoJS from 'crypto-js';
import i18n from '../../../i18n/login';
import JSX from './LoginForm.jsx';
import JSS from './LoginForm.jss';
import AuthProvider from '../../provider/Auth';

class LoginForm extends Component {

    // although they are marked as "unused",
    // they are assigned internally by the superclass!
    stylesheet = JSS;
    template = JSX;
    translation = i18n['de_DE'];

    state = {
        login: localStorage.getItem('login'),
        password: null
    };

    constructor(props) {
        super(props);

        this.state = {
            login: localStorage.getItem('login'),
            password: null
        }
    }

    // -- actors

    login(response) {

        if (AuthProvider.isAllowed('/dashboard')) {

            alert(this.translation['dashboardAccessAllowed']);

        } else {

            alert(this.translation['dashboardAccessNotAllowed']);
        }
    }

    loginFailed(error) {

        alert(this.translation['loginError']);

        throw error;
    }

    // -- event handlers

    onPasswordChange = (event) => {

        this.setState({
            password: CryptoJS.SHA512(event.target.value).toString(CryptoJS.enc.Hex)
        });
    };

    onEmailChange = (event) => {

        this.setState({login: event.target.value});

        // persist
        localStorage.setItem('login', event.target.value);
    };

    onSubmitLoginForm = (submitEvent) => {

        submitEvent.preventDefault();

        // try to login
        AuthProvider
            .login(this.state)
            .then(response => {
                submitEvent.target.reset();
                return response;
            })
            .then(response => this.login(response))
            .catch(error => this.loginFailed(error));
    };
}
export default LoginForm;