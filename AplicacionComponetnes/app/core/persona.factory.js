'use strict';

angular.
    module('core').
    factory('PersonaFactory', function($http){
        var service={};

        service.nombreEmpleado = function(){
            return $http.get('http://localhost:3000/nombre');
        }

        return service;
    });