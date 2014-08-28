'use strict';

/**
 * @ngdoc function
 * @name wsdcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wsdcApp
 */
angular.module('wsdcApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
