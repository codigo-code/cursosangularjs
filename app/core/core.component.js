'use strict';

angular.
  module('core').
  service('CoreService', function () {
    // bloque de codigo!!!

    return {
      nombre: 'Soy un valor que viene del servico muejeje',
      apellido: 'pepino',
      sarasa: function () {
        return 1;
      }
    };
  });