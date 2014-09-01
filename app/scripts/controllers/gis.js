'use strict';

/**
 * @ngdoc function
 * @name wsdcApp.controller:GisCtrl
 * @description
 * # GisCtrl
 * Controller of the wsdcApp
 */
angular.module('wsdcApp')
  .controller('GisCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
    window.Restangular = Restangular;
  }]);
