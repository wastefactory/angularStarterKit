class LoginDirective implements ng.IDirective{

    public restrict: string;
    public template: string;
    public controller: string;
    public controllerAs: string;
    public bindToController: boolean;

    constructor(...deps: Array<any>) {
        this.restrict = 'E';
        this.template = require('./login.directive.html');
        this.controller = 'LoginController';
        this.controllerAs = 'vm';
        this.bindToController = true;
    }

    static factory(...deps: Array<any>) {
        return new LoginDirective(...deps);
    }

}

// Dependency Injection
LoginDirective.factory.$inject = [];

export { LoginDirective };