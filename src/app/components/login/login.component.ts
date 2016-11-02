import { LoginController } from './login.controller';
import './login.scss';

class LoginComponent implements ng.IComponentOptions {
	
	public template: string;
	public controller: Function;
	public bindings : any;

	constructor(){
		this.controller = LoginController;
		this.bindings = {
			username: '@',
			password: '@'
		};
		this.template = require('./login.html');
	}

}

export { LoginComponent };