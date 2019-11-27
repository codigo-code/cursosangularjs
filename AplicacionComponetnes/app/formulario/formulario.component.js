'use strict';

angular.
  module('formulario').
  component('formularioComponent', {
    templateUrl: 'formulario/formulario.template.html',

    controller:[ 'PersonaFactory',
      function FormularioController(PersonaFactory) {
        var self = this;
        // console.log(this.user);
        console.log(PersonaFactory);
        PersonaFactory.nombreEmpleado().then(function(success){
           self.nombre=success.data;
         });

        this.mostrar = function () {
          // console.log(self);
          self.obj = self.nombre +  " " + self.apellido + "  " + self.edad;
          
        }

      }
     ]
  });