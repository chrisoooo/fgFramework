'use strict';

/**
 * @ngdoc directive
 * @name wsdcApp.directive:fgNotificationCenter
 * @description
 * # fgNotificationCenter
 */
angular.module('wsdcApp')
  .directive('fgNotificationCenter', function () {
    return {
      templateUrl: 'templates/fgnotificationcenter.html',
      restrict: 'EA',
      transclude: true,
      replace: true,
      link: function postLink(scope, element) {
        var $el = $(element);

        scope.$on('fgNotificationCenter:toggle', function (){
          $el.toggle();
        });

      }
    };
  });
