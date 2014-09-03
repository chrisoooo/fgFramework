'use strict';

/**
 * @ngdoc function
 * @name wsdcApp.controller:VideomantainCtrl
 * @description
 * # VideomantainCtrl
 * Controller of the wsdcApp
 */
angular.module('wsdcApp')
  .controller('VideomantainCtrl', function ($scope) {
    $scope.model = [
      { 'id' : '1', 'parent' : '#', 'text' : '所有视频' },
      { 'id' : '2', 'parent' : '#', 'text' : '我的分组' },
      { 'id' : '3', 'parent' : '2', 'text' : '视频 1', type: 'video' },
      { 'id' : '4', 'parent' : '2', 'text' : '视频 2', type: 'video' }
    ];

    $scope.add = function (){
      $scope.model.push({
        id: new Date().getTime() + '',
        parent: '2',
        text: 'Child 2',
        type: 'video'
      });
    };

    $scope.record = {
      node: null,
      nodes: null
    };

  });
