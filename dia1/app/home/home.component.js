'use strict';

angular.
  module('home').
  component('homeComponent', {
    templateUrl: 'home/home.template.html',
    controller: 
      function NeorisController() {
         this.nombre='Empleado Modelo'
        console.log(this);
      }
    
  });