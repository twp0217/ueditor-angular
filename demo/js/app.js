var app = angular.module('app', [
    'ui.router',
    'ueditor-angular'
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('demo', {
            url: '/demo',
            templateUrl: './views/demo.html'
        })
        .state('documentation', {
            url: '/documentation',
            templateUrl: './views/documentation.html'
        });
        
    $urlRouterProvider.otherwise('/documentation');
}]);