function HttpInterceptor ($injector, $q) {

    return {
        request: onRequest,
        requestError: onRequestError,
        response: onResponse,
        responseError: onResponseError
    };

    function onRequest(config){
        let StorageService = $injector.get('StorageService');
        let userSession = StorageService.getUserSession();
        
        if(typeof userSession !== 'undefined') {
            if(typeof userSession.access_token !== 'undefined'){
                config.headers["Authorization"] = 'Bearer ' + userSession.access_token;
            }
        }
        
        return config;
    }

    function onRequestError(rejection){
        return $q.reject(rejection);
    }

    function onResponse(result){
        var toastr = $injector.get('toastr');
        
        if(result.config.url !== '/api/login'){
            if(angular.isDefined(result.data.success)){
                if(!result.data.success){
                    // todo: return proper error message from BE
                    toastr.error(result.data.errorMessage || " Error: Please try again later.");
                }

                // if(result.config.method === 'POST' && result.data.success){
                //     toastr.success('Success: ');
                // }
            }

        }                
        return result;
    }

    function onResponseError(response){
        return $q.reject(response);
    }

}

HttpInterceptor.$inject = ['$injector', '$q'];

export { HttpInterceptor };