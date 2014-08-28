'use strict';

/**
 * @ngdoc function
 * @name wsdcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wsdcApp
 */
angular.module('wsdcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
