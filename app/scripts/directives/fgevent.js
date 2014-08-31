'use strict';

/**
 * @ngdoc directive
 * @name wsdcApp.directive:fgEvent
 * @description
 * # fgEvent
 */
angular.module('wsdcApp')
  .directive('fgEvent', ['$rootScope', function ($rootScope) {
    return {
      restrict: 'EA',
      scope: {
        eventData: '=?'
      },
      link: function postLink(scope, element, attrs) {
        var $el = $(element);

        var broadcast = function(){
          $rootScope.$broadcast(attrs.fgEvent, scope.eventData);
        };

        $el.on('click', broadcast);

        scope.$on('$destroy', function (){
          $el.un('click', broadcast);
        });
      }
    };
  }]);
