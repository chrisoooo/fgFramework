'use strict';

/**
 * @ngdoc function
 * @name wsdcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wsdcApp
 */
angular.module('wsdcApp')
  .controller('MainCtrl', function ($scope, fgMessenger) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.showMessenger = function (){
      fgMessenger.post('这是 fgMessenger.post 示例');
      
      fgMessenger.confirm({
        message: '这是 fgMessenger.confirm 示例',
        id: 'MainCtrl',
        actions: {
          delete: {
            label: 'Delete',
            action: function (){
              $scope.name = 'asfdaksjfdasd';
            }
          }
        }
      });
    };
    
  });
