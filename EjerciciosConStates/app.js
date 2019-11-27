var app = angular.module('fnet', ['ui.router']);

app.config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state("viewA", {
                url: '/viewA',
                templateUrl: 'view.html',
                controller: 'ctrlA',
            })
            .state("viewB", {
                url: '/viewB',
                templateUrl: 'view.html',
                controller: 'ctrlB',
            });
    }
]);

app.controller('MainCtrl', function ($scope, $location) { });

app.controller('ctrlA', function ($scope) {
    $scope.val = 'CtrlA';
    $scope.nombre = "vero";
});

app.controller('ctrlB', function ($scope) {
    $scope.val = 'CtrlB';
    $scope.nombre = "ale";
});

app.directive('camila', function () {
    return {
        restrict: "A",
        transclude: true,
        templateUrl: "camila.html",

        controller: ['$scope', 'ale', function ($scope, ale) {
            console.log($scope);
            $scope.nombreDirectiva = "Camilo :P";
            var self = $scope;

            try {
                ale.then(function (ok) { // 500
                    console.log(ok);

                    
                    self.nombreDirectiva = ok.data.title;

                    // null.toString();
                }).catch(function (error) {
                    console.log('rompio pero en el callback')
                });
                // console.log(ale);
            } catch (error) {
                console.log('exploto porque hubo un null');
            }
        }]
    };
});

app.service('ale', function ($http) {

    return $http.get('https://jsonplaceholder.typicode.com/todos/1');
});