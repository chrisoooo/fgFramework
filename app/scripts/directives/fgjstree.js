'use strict';

/**
 * @ngdoc directive
 * @name wsdcApp.directive:fgJstree
 * @description
 * # fgJstree
 */
angular.module('wsdcApp')
  .directive('fgJstree', function () {
    return {
      restrict: 'EA',
      scope: {
        ngModel: '=?',
        node: '=?',
        selected: '=?'
      },
      link: function postLink(scope, element) {

        var $el = $(element), jstree;

        var destroy = function () {
          if(jstree){
            jstree.jstree(true).destroy();
            jstree = null;
          }
        };

        var create = function (value) {
          
          destroy();

          jstree = $el.jstree({
            types: {
              'default': {
                icon: 'fa fa-folder-o'
              },
              video: {
                icon: 'fa fa-video-camera'
              }
            },
            core: {
              themes: {
                stripes: false,
                dots: false
              },
              data: value
            },
            plugins: ['checkbox', 'types']
          })
          .on('changed.jstree', function (e, data) {
            scope.node = data.node;
            var items = data.instance.get_selected(true);
            scope.selected = items;
            if(scope.selected.length === 0){
              scope.node = null;
            }
            scope.$apply();
          });
          
        };

        scope.$watchCollection('ngModel', create);
        
        scope.$on('destroy', destroy);

      }
    };
  });
