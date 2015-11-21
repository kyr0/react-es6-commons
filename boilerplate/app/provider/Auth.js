import ServiceAPI from './ServiceAPI';

class AuthImpl {

    ACL = {};

    login(data) {

        return new Promise((resolve, reject) => {

            // call service
            ServiceAPI.POST({
                    url: 'login',
                    data: data
                })
                .then(response => Auth.onAfterLogin(response))
                .then(resolve)
                .catch(reject);
        });
    }

    onAfterLogin(loginResponse) {

        // assign ACL
        if (loginResponse.acl) {
            Auth.ACL = loginResponse.acl;
        }
        return loginResponse;
    }

    /**
     * Checks the ACL for if a permission is allowed or not.
     * Expects login() to be called and resolved beforehand.
     * @param feature Name of the feature to check permissions for
     * @return {Boolean}
     */
    isAllowed(feature) {
        return Auth.ACL[feature] ? true : false;
    }
}

var Auth = new AuthImpl();

export default Auth;