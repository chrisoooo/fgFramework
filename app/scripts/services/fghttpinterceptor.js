'use strict';

/**
 * @ngdoc service
 * @name wsdcApp.fgHttpInterceptor
 * @description
 * # fgHttpInterceptor
 * Factory in the wsdcApp.
 */
angular.module('wsdcApp')
  .constant('fgHideMsg', {'fgHideMsg': true})
  .factory('fgHttpInterceptor', function ($q, fgMessenger) {
    return {
      //全局处理服务端请求错误
      responseError: function(rejection) {
        var msg = '服务端 (' + rejection.status + ') 错误!\n' + 
          rejection.config.method + ': ' + rejection.config.url + '\n' + 
          JSON.stringify(rejection.config.data, null, 2);

        fgMessenger.post({
          id: 'fgHttpInterceptor',
          message: msg,
          type: 'error',
          showCloseButton: true
        });

        return $q.reject(rejection);
      },

      response: function (response){
        if(response && response.data && response.config && response.config.headers.restangular/*response.config.url.match(/^\/java\//)*/){
          var success = response.data.success;

          if(success){
            if(!response.config.headers.fgHideMsg){
              fgMessenger.post({
                id: 'fgHttpInterceptor',
                message: response.data.msg,
                type: 'success',
                showCloseButton: true
              });
            }
          }else{
            fgMessenger.post({
              id: 'fgHttpInterceptor',
              message: response.data.msg + '\n' + response.config.url,
              type: 'error',
              showCloseButton: true
            });
          }
        }
        return response || $q.when(response);
      }

    };
  });
