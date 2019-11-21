'use strict';

angular.
  module('neorisApp').
  config(['$routeProvider',
    function config($routeProvider) {
      
      $routeProvider.
        when('/neoris', {
          template: '<neoris-component></neoris-component>'
        }).
        when('/home', {
          template: '<home-component></home-component>'
        }).
        when('/mascota', {
          template: '<mascota-component></home-component>'
        }).
        otherwise('/home');
    }
  ]);
