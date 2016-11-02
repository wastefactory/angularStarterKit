Router.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function Router ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {

    $urlRouterProvider
        .otherwise("/");
        
    $stateProvider
        .state('login', {
            url: '/',
            template: require('./components/login/login.html')
        });
}