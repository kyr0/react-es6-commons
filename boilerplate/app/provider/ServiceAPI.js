class ServiceAPIImpl {

    defaultDataType = 'json';
    defaultErrorCode = 'ESERVICEAPI_UNKNOWN';
    defaultErrorMessage = 'An unknown error occurred when calling the service endpoint.';
    defaultNetworkErrorCode = 'ESERVICEAPI_NETWORK';
    defaultNetworkErrorCodeMessage = 'A network error occurred when calling the service endpoint.';

    POST(requestConfig) {
        requestConfig.method = 'post';
        return ServiceAPI.call(requestConfig);
    }

    GET(requestConfig) {
        requestConfig.method = 'get';
        return ServiceAPI.call(requestConfig);
    }

    PUT(requestConfig) {
        requestConfig.method = 'put';
        return ServiceAPI.call(requestConfig);
    }

    DELETE(requestConfig) {
        requestConfig.method = 'delete';
        return ServiceAPI.call(requestConfig);
    }

    applyDefaultDataType(requestConfig) {

        if (!requestConfig.dataType) {
            requestConfig.dataType = ServiceAPI.defaultDataType;
        }
    }

    createError(code, message) {

        var error = new Error(message);
        error.code = code;
        return error;
    }

    /**
     * Calls the service via $.ajax and returns it's promise.
     * @param requestConfig $.ajax's first argument
     * @returns {Promise}
     */
    call(requestConfig) {

        ServiceAPI.applyDefaultDataType(requestConfig);

        return new Promise(function(resolve, reject) {

            $.ajax(requestConfig).then((request, status, response) => {

                response = response.responseJSON || response;

                if (response.success === false) {

                    reject.call(this, ServiceAPI.createError(

                        response.code || ServiceAPI.defaultErrorCode,
                        response.message || ServiceAPI.defaultErrorMessage
                    ));

                } else {

                    response = request; // weired: different argument order

                    response.data = response.data || {};

                    resolve.call(this, response.data);
                }

            }, () => {

                reject.call(this, ServiceAPI.createError(

                    ServiceAPI.defaultNetworkErrorCode,
                    ServiceAPI.defaultNetworkErrorCodeMessage
                ));
            });
        });
    }
}
var ServiceAPI = new ServiceAPIImpl();

export default ServiceAPI;