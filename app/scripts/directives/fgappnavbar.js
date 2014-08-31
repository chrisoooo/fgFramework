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
      templateUrl: 'templates/fgAppNavbar.html',
      restrict: 'EA',
      replace: true,
      link: function postLink(scope) {
        scope.$on('toggleNavbar', function (){
          console.log(111);
        });

        scope.title = 'Project';

        //先直接硬编码菜单项
        scope.menus = [{
          path: '#/gis',
          menuName: '电子地图'
        },{
          path: '',
          menuName: '预案管理',
          children: [{
            menuName: '预案编辑'
          },{
            menuName: '预案监视'
          },{
            menuName: '预案执行'
          }]
        },{
          path: '#/gpsSupervison',
          menuName: '位置督查'
        },{
          path: '#/videoSupervison',
          menuName: '视频督查',
          children: [{
            path: '#/videoMantain',
            menuName: '点位维护'
          }]
        },{
          path: '',
          menuName: '系统管理',
          children: [{
            menuName: '用户管理'
          }]
        }];

      }
    };
  });
