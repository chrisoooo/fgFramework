'use strict';

/**
 * @ngdoc function
 * @name wsdcApp.controller:BillCtrl
 * @description
 * # BillCtrl
 * Controller of the wsdcApp
 */
angular.module('wsdcApp')
  .controller('BillCtrl', ['$scope','Restangular','fgMessenger',function ($scope,Rest,fgMessenger) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.records = [
        {noteId:1, seqNo:1,  receiveUser:'admin', receiveTime:'2014-09-01', isValid:1, isRevoke:0, isReprint:1, jdsbh:'001222000'},
        {noteId:2, seqNo:2,  receiveUser:'admin', receiveTime:'2014-09-01', isValid:0, isRevoke:1, isReprint:1, jdsbh:'001222002'},
        {noteId:2, seqNo:3,  receiveUser:'admin', receiveTime:'2014-09-01', isValid:1, isRevoke:0, isReprint:0, jdsbh:'001222003'}
    ];
      $scope.total = $scope.records.length;
      $scope.Q = {limit:10,page:1};

      // 全选功能
      $scope.checks = [];

      $scope.select = function(index){
          $scope.checks[index] = !$scope.checks[index];
          $scope.allChecked = _.every($scope.checks);
      };

      var initCheck = function(bool){
          var checks = [];
          for(var i = 0; i < $scope.total; i++){
              checks.push(bool);
          }
          $scope.checks = checks;
      };

      $scope.selectAll = function(){
        $scope.allChecked = !$scope.allChecked;
        initCheck($scope.allChecked);
      };

      // 查询功能
      var _query = function(){
          var q = $scope.Q;

          $scope.allChecked = false;

          Rest.all('bill/list').post(q).then(function(data){
              if(!data.success){
                alert(data.msg);
                return;
              }
              $scope.total = data.total;
              $scope.records = data.results;
              initCheck(false);
          });
      };

     // _query();
      initCheck(false);
      $scope.pChange = function(page){
          $scope.Q.page = page;
          _query();
      };

      $scope.query = function(){
          $scope.pChange(1);
      };

      $scope.applyNewModal = function(){
        $('#newModal').modal();
      };

      $scope.applyNew = function(){

          if(!$scope.qbill || !$scope.qbill.start && !$scope.qbill.end){
            fgMessenger.post({message: '票据号不能为空',type: 'error',showCloseButton: true });
            return;
          }
          var num = /^[0-9]*$/;
          //判断驾驶证号是否为数字
          if($scope.qbill.start){
              if(!$scope.qbill.start.match(num)){
                fgMessenger.post({message: '票据号必须为数字',type: 'error',showCloseButton: true });
                $scope.qbill = {};
                return;
              }
          }
          //判断决定书编号是否为数字
          if($scope.qbill.end){
              if(!$scope.qbill.end.match(num)){
                fgMessenger.post({message: '票据号必须为数字',type: 'error',showCloseButton: true });
                $scope.qbill = {};
                return;
              }
          }

          if(parseInt($scope.qbill.end) <= parseInt($scope.qbill.start)){
            fgMessenger.post({message: '后一个数值必须大于前一个数值',type: 'error',showCloseButton: true });
            $scope.qbill = {};
            return;
          }

         Rest.all('note/register/' + $scope.qbill.start + '/' + $scope.qbill.end).post().then(function(data){
            if(!data.success){
              fgMessenger.post({message: data.msg + data.customMsg + data.exceptionMsg,type: 'error',showCloseButton: true });
              $scope.qbill = {};
              return;
            }
            fgMessenger.post({message: data.msg,type: 'success',showCloseButton: true });
            $scope.qbill = {};
        });
      };
  }]);
