'use strict';

/**
 * @ngdoc function
 * @name wsdcApp.controller:VideosupervisonCtrl
 * @description
 * # VideosupervisonCtrl
 * Controller of the wsdcApp
 */
angular.module('wsdcApp')
  .controller('VideosupervisonCtrl', function ($scope, Restangular) {
    $scope.model = [
      { 'id' : '1', 'parent' : '#', 'text' : '所有视频' },
      { 'id' : '2', 'parent' : '#', 'text' : '我的分组' },
      { 'id' : '3', 'parent' : '2', 'text' : '分组 1'},
      { 'id' : '4', 'parent' : '2', 'text' : '分组 2'},
      { 'id' : '5', 'parent' : '3', 'text' : '视频 1', type: 'video' },
      { 'id' : '6', 'parent' : '4', 'text' : '视频 2', type: 'video' }
    ];

    console.log(Restangular.one('1.json').get());
  });
