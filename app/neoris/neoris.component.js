'use strict';

angular.
  module('neoris').
  component('neorisComponent', {
    templateUrl: 'neoris/neoris.template.html',
    controller: 
      function NeorisController() {
         this.nombre='Empleado Modelo'
        console.log(this);
      }
    
  });