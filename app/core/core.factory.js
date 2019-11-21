'use strict';

angular.
    module('core').
    factory('CoreFactory', function($http){
        var service={};

        service.usuarios = function(){
            return $http.get('https://jsonplaceholder.typicode.com/todos/1');
        }

        service.algo=function(){
            return "hola mundo";
        }
        return service;
    });