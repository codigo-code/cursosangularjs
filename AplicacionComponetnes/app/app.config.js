'use strict';

angular.
  module('neorisApp').
  config(['$routeProvider','$logProvider',
    function config($routeProvider,$logProvider) {
      $logProvider.debugEnabled(true);
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
        when('/formulario', {
          template: '<formulario-component></formulario-component>'
        }).
        otherwise('/home');
    }
  ]);
