import 'angular';

Run.$inject = ['$rootScope', '$state'];

export default function Run ($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', onStateChangeStart);
    $rootScope.$on('$stateChangeSuccess', onStateChangeSuccess);
    $rootScope.$on('$stateNotFound', onStateNotFound);
    $rootScope.$on('$stateChangeError', onStateChangeError);
    
    function onStateChangeStart(event, toState, toParams, fromState, fromParams) {}
    
    function onStateChangeSuccess(event, toState, toParams, fromState, fromParams) {}

	function onStateNotFound(event, unfoundState, fromState, fromParams) {}

	function onStateChangeError(event, toState, toParams, fromState, fromParams, error) {} 
}