import { LoginService } from './components/login/login.service';
import { DataService } from './services/data.service';

import * as LoginModule from './components/login/login.module';

angular.module('app')
    //services
    .service('LoginService', LoginService)
    .service('DataService', DataService)
        
    // components
    .directive('login', LoginModule.directive)
    .controller('LoginController', LoginModule.controller)