'use strict';

/**
 * @ngdoc function
 * @name wsdcApp.controller:VideosupervisonCtrl
 * @description
 * # VideosupervisonCtrl
 * Controller of the wsdcApp
 */
angular.module('wsdcApp')
  .controller('VideosupervisonCtrl', function ($scope, Restangular, fgMessenger, fgHideMsg) {
    $scope.videoWidget = {
      viewStack: 'tree'
    };

    //删除分组
    $scope.deleteGroup = function (group) {
      fgMessenger.confirm({
        message: '确认删除分组「'+group.text+'」吗?',
        type: 'error',
        id: 'VideosupervisonCtrl',
        actions: {
          'delete': {
            label: '确认',
            action: function (){
              var id = group.baseId;

              Restangular.one('videoGroup/' + id).doDELETE().then(function (){
                fetchTree();
              });
            }
          },
          'cancel': {
            label: '取消'
          }
        }
      });
    };

    $scope.group = {
      name: null
    };

    //新增分组
    $scope.addGroup = function ($event) {
      if($event.keyCode !== 13){
        return;
      }

      fgMessenger.hideAll();

      if($scope.group.name.length >= 3){
        var param = {
          name: $scope.group.name
        };

        Restangular.one('videoGroup').post('',param).then(function (data){

          $scope.groups.push({
            id:new Date().getTime(), text: $scope.group.name, parent: 'root2'
          });

          $scope.videoWidget.viewStack = 'list';

          fetchTree();
        });

      }
    };

    var filter = function (item) {
      return item.parent === 'root2';
    };

    var fetchTree = function () {
      Restangular.one('videoGroup/tree/view').get({}, fgHideMsg).then(function (data){
        $scope.model = data.results;

        $scope.groups = _.filter($scope.model, filter);
      });
    };

    fetchTree();
  });
