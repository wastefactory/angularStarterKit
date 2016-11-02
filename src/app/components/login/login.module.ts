import './login.scss';

import { LoginDirective } from './login.directive';
import { LoginController } from './login.controller';

let directive = LoginDirective.factory;
let controller = LoginController;

export {directive, controller};