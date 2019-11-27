'use strict';

angular.
  module('home').
  component('homeComponent', {
    templateUrl: 'home/home.template.html',
    bindings:{
      user:'=',
      num:'@'
    },
    controller:
      function HomeController() {
        this.nombre = 'Mati Fojgiel';
        
        console.log(this.user);
      }

  });