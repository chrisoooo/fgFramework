'use strict';

/**
 * @ngdoc function
 * @name wsdcApp.controller:IllegalrecordCtrl
 * @description
 * # IllegalrecordCtrl
 * Controller of the wsdcApp
 */
angular.module('wsdcApp')
  .controller('IllegalrecordCtrl', ['$scope','Restangular','fgMessenger','$filter',function ($scope,Rest,fgMessenger,$filter) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      $scope.records = [];
      $scope.newBill = {};


      $scope.Q = {};

      // 全选功能
      $scope.checks = [];

      $scope.select = function(index){
          $scope.checks[index] = !$scope.checks[index];
          $scope.allChecked = _.every($scope.checks);
      };

      //
      var initCheck = function(bool){
          var checks = [];
          for(var i = 0; i < $scope.records.length; i++){
              checks.push(bool);
          }
          $scope.checks = checks;
      };

      //全选
      $scope.selectAll = function(){
        $scope.allChecked = !$scope.allChecked;
        initCheck($scope.allChecked);
      };

      // 查询功能
      var _query = function(){
          var q = $scope.Q;

          if(!$scope.Q.jszh && !$scope.Q.jdsbh){
            fgMessenger.post({message: '请输入查询条件',type: 'error',showCloseButton: true });
            return;
          }
          var num = /^[0-9]*$/;

          //判断驾驶证号是否为数字
          if($scope.Q.jszh){
              if(!$scope.Q.jszh.match(num)){
                fgMessenger.post({message: '查询条件不能包含非数字字符',type: 'error',showCloseButton: true });
                $scope.Q = {};
                return;
              }
          }
          //判断决定书编号是否为数字
          if($scope.Q.jdsbh){
              if(!$scope.Q.jdsbh.match(num)){
                fgMessenger.post({message: '查询条件不能包含非数字字符',type: 'error',showCloseButton: true });
                $scope.Q = {};
                return;
              }
          }

          $scope.allChecked = false;

          Rest.all('violation/query').post(q).then(function(data){
              if(!data.success){
                fgMessenger.post({message: data.msg +'</br>'+ data.customMsg + '</br>'+ data.exceptionMsg,type: 'error',showCloseButton: true });
                return;
              }
              $scope.checkRec(data.results);
              initCheck(false);
          });
      };

      $scope.pChange = function(page){
          $scope.Q.page = page;
          _query();
      };

      $scope.query = function(){
          _query();
      };

      //清空列表
      $scope.removeAll = function(){
        $scope.records = [];
        initCheck();
      };

      //移除部分列表数据
      $scope.removePart = function(obj){
        if(!obj){
          var remove = [];
          for(var i = 0, size = $scope.checks.length; i < size; i++){
            if($scope.checks[i]){
                remove.push($scope.records[i]);
            }
          }
          $scope.records = _.difference($scope.records, remove);
          initCheck();
        }else{
          $scope.records = _.without($scope.records, obj);
        }   
      };

      //检查新查询数据是否在已有数据列表里
      $scope.checkRec = function(arrs){
          $scope.records = _.union($scope.records, arrs);
      };

      //计算金额
      $scope.calculate = function(records){
        $scope.fk  = 0;
        $scope.zn  = 0;
        $scope.total = 0;
        angular.forEach(records,function(e){
          $scope.fk = $scope.fk + e.fkje;
          $scope.zn = $scope.zn + e.znj;
        });
        $scope.total = $scope.fk + $scope.zn;
      };

      $scope.$watch('records',function(){
        $scope.calculate($scope.records);
      });

      //确认缴款模态框
      $scope.confirmModal = function(record){
        $scope.newBill = record;
        $scope.billCheckI = true;

        //查询票据
         Rest.all('note/nextNote').post().then(function(data){
              if(!data.success){
                $scope.billCheckI = false;
                $scope.billCheckF = true;
                fgMessenger.post({message: data.msg + '</br>'+ data.customMsg + '</br>'+ data.exceptionMsg,type: 'error',showCloseButton: true });
                return;
              }
              $scope.billCheckI = false;
              $scope.billCheckS = true;
              $scope.newBill.noteNo = data.results.noteNo;
              $scope.$apply();
              fgMessenger.post({message: data.msg,type: 'success',showCloseButton: true });

              //银行对账
              var q = {'jdsbh':$scope.newBill.jdsbh || '123456789012345',
                       'dsr':$scope.newBill.dsr || 'sadfasdf',
                        'jszh':$scope.newBill.jszh || '345345345345',
                        'fkje':$scope.newBill.fkje || 100,
                        'znj':$scope.newBill.znj || 50};
          });
        
        $('#conformModal').modal();
      };


      //银行对账
      $scope.confirm = function(){
        $scope.account = true;
         Rest.all('note/accountCheck').post($scope.newBill).then(function(data){
              if(!data.success){
                fgMessenger.post({message: data.msg +'</br>' + data.customMsg +'</br>' + data.exceptionMsg,type: 'error',showCloseButton: true });
                $scope.accountCheckF = true;
                $scope.accountFailedInfo = data.exceptionMsg;
                return;
              }
              $scope.accountCheckS = true;
              $scope.accountFailedInfo = '';
              var results = data.results;
              $scope.newBill.chargeUserCode = results.chargeUserCode;
              $scope.newBill.chargeUserName = results.chargeUserName;
              $scope.newBill.chargeDeptCode = results.chargeDeptCode;
              $scope.newBill.chargeDeptName = results.chargeDeptName;
              $scope.newBill.chargeTime =  results.chargeTime;
              fgMessenger.post({message: data.msg,type: 'success',showCloseButton: true });
              $scope.print($scope.newBill);
          });
      };

     
      //打印请求封装
      var sendPrint = function (url, data){
        $.ajax({
          url: url,
          type: 'POST',
          dataType: 'xml',
          data: data,
          contentType: 'text/xml; charset="utf-8"',
          headers: {
            SOAPAction:'urn:RepIntf-IRep#funPrintServer'
          }
        })
        .done(function (resp){
          console.log(resp);
          //resp 结构参考下一代码示例
        })
        .fail(function (){
          fgMessenger.post({message: '打印失败',type: 'error',showCloseButton: true });
          $scope.rePrint = true;
        });
      };

      //调用
      $scope.print = function(record){
         //webservice 调用地址
        var wsdl = 'http://localhost:7777/soap/IRep';

        //报表名称
        var reportName = '罚款专用票据.fr3';

        //处理缴款日期
        var jkrq = new Date(record.jkrq);
        var day = jkrq.getDate() + 1;
        var month = jkrq.getMonth() + 1;
        var year = jkrq.getFullYear();
        //处理违法日期
        var wfsj = new Date(record.wfsj);
        var _wfsj = $filter('date')(wfsj, 'yyyy-MM-dd HH:mm:ss');
       // var _wfsj = wfsj.getFullYear() + 1 +'-' + wfsj.getMonth() + 1 + '-' + wfsj.getDate() + 1 + ' ' + wfsj.getHours() + 1 + ':' + wfsj.getMinutes() +1 + ':' +  wfsj.getSeconds() +1;
        //报表内容
        //var content = '320506-111111111|当事人|无|居民身份证号码：|320111111111112345|准驾车型|当事人地址|号牌号码|车辆类型|发证机关|决定书内容|罚款信息|银行信息|处理日期|记分信息|备注';
        var content = record.dsr + '|'+ year + '|' + month +'|' + day +'|' + record.chargeDeptName+ '|' + record.jdsbh +'|' + record.jszh + '|' + record.wfxw + '|' + record.zqmj +'|' + _wfsj +'|' + record.overdueDays +'|' + record.chargeUserCode +'|' + '车号:' + record.hphm + '|' + '违法地址:' + record.wfdz +'|' + record.fkje +'|' + record.znj + '|' + record.totalMoneyChinese +'|' + '决定书编号:' +record.jdsbh;
        //报表请求内容模板
        var template = function (name, content) {
          return '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><funPrintServer xmlns="http://tempuri.org/"><repName>'+ name +'</repName><repValue>' + content + '</repValue></funPrintServer></Body></Envelope>';
        };

        var data = template(reportName, content);

        sendPrint(wsdl, data);
      };

      $('#conformModal').on('hidden.bs.modal', function (e) {
          $scope.billCheckI = null;
          $scope.billCheckS = null;
          $scope.billCheckF = null;
          $scope.account = null;
          $scope.accountCheckS = null;
          $scope.accountCheckF = null;
      })
      
  }]);
