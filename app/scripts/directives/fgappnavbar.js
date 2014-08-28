'use strict';

/**
 * @ngdoc directive
 * @name wsdcApp.directive:fgAppNavbar
 * @description
 * # fgAppNavbar
 */
angular.module('wsdcApp')
  .directive('fgAppNavbar', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the fgAppNavbar directive');
      }
    };
  });
