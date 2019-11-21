'use strict';

angular.
  module('muestro').
  component('muestroComponent', {
    templateUrl: 'muestro/muestro.template.html',
    bindings: {
      obj: '@'
    },
    controller:
      function MuestroController() {

        console.log(this.obj);
        self = this;
        this.mostraros= function(){
          console.log(self.obj);
          self.nombre= self.obj;
          self.apellido=self.obj.apellido;
          self.edad=self.obj.edad;
        }
      }

  });