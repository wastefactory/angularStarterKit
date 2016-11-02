import IScope = angular.IScope;
export class LoginController {

    public serviceErrors: Array<any>;
    private promise: any;

	static $inject = ['$scope'];

	constructor (
        private $scope: ng.IScope
    ){
        this.serviceErrors = [];
    }

	$onInit(): void {
        console.log('login controller');
	}
}