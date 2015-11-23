angular.module('Booya')

.config(function($routeProvider) {
    //this runs automatically when the main module is created
    console.log('running config');
    $routeProvider
    .when('/', {
        templateUrl:'main.html',
        controller: 'MainCtrl'
    })
    .when('/details/:itemID', {
        templateUrl:'details.html',
        controller: 'DetailsCtrl'
    })
    .otherwise({redirectTo: '/'});
})