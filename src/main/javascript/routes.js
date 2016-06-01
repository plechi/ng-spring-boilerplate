(function (window, angular, undefined) {
    'use strict';

    angular.module('app').config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider.state('index', {
                url: '/',
                views: {
                    'main@': {
                        templateUrl: 'templates/index.html'
                    }
                },
                data: {
                    pageTitle: "Index"
                }
            })
        }
    ]).run(['$rootScope', function ($rootScope) {

        $rootScope.$on('$stateChangeStart', function (event, toState) {

            if (!!toState.data && !!toState.data.pageTitle) {
                $rootScope.pageTitle = toState.data.pageTitle;
            } else {
                $rootScope.pageTitle = '';
            }

        })
    }]);


})(window, window.angular);