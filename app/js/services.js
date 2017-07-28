'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.factory("$msgbox", function($rootScope, $uibModal, $q){
    var success_tpl = '<div class="recharge-modal apply"><div class="recharge-title">申请充值<i class="close" data-ng-click="cancel($event)"></i></div><div class="recharge-content apply"><div class="select-cell"><span class="fl grey1 mg0">请填写充值数额：</span><input type="text" ng-model="filters.q" class="search_showbox fl"></div><div class="select-cell"><textarea class="reason"></textarea></div></div><div class="recharge-foot"><div class="confirm-btn fl" data-ng-click="ok($event)">确定</div><div class="common-btn fl ml15" data-ng-click="cancel($event)">取消</div></div></div>';
    
    var scope = $rootScope.$new();
    
    return {
        show: function(msg, opts){
            var defer = $q.defer();
            opts = opts || {};
            
            $uibModal.open({
                template: success_tpl,
                scope: scope,
                controller: function($scope, $uibModalInstance){              
                    $scope.ok = function($event){
                        $event.preventDefault();
                        $uibModalInstance.close();
                        defer.resolve();
                    };
                    $scope.cancel = function($event){
                        $event.preventDefault();
                        $uibModalInstance.close();
                        defer.reject();
                    };
                },
                backdrop: "static",
                keyboard: false
            });
            return defer.promise;
        }
    }    
})
/*.factory("$msgtoast", function($rootScope, $modal, $q){
    var success_tpl = '<div class="msg-body" style="font-size: 18px">{{message}}</div><div class="msg-footer"  data-ng-click="cancel($event)">我知道了</div>';
    
    var scope = $rootScope.$new();
    
    return {
        show: function(msg, opts){
            var defer = $q.defer();
            opts = opts || {};
            
            $modal.open({
                template: success_tpl,
                scope: scope,
                controller: function($scope, $modalInstance){
                    $scope.message = msg;
                    $scope.cancel = function($event){
                        $event.preventDefault();
                        $modalInstance.close();
                        defer.reject();
                    };
                },
                size: "sm",
                backdrop: "static",
                keyboard: false
            });
            return defer.promise;
        }
    }    
}).factory("$toast", function($rootScope, $modal, $q){
    var success_tpl = '<div class="toast-body" style="font-size: 18px">{{message}}</div>';
    
    var scope = $rootScope.$new();
    
    return {
        show: function(msg, opts){
            var defer = $q.defer();
            opts = opts || {};
            
            $modal.open({
                template: success_tpl,
                scope: scope,
                controller: function($scope, $modalInstance){
                    $scope.message = msg;
                },
                size: "sm",
                backdrop: "static",
                keyboard: false
            });
            return defer.promise;
        }
    }    
}) */