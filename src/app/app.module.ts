import 'angular';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'lodash';

import Config from './app.config';
import Run from './app.run';
import Router from './app.router';
import * as Static from './app.constants';

import '../assets/app.scss';

angular
    .module('app', [
            'ngAnimate',
            'ui.router',
            'ui.bootstrap',
        ])
    .config(Config)
    .config(Router)
    .constant('_', _) //register lodash
    .constant("constants", Static.Constants.Default)
    .run(Run);

