angular.module('myApp.controllers', [])
.controller('interviewController', function($scope, $element) { 
    $scope.tabState = 1
    $scope.isCollapsed = false
    $scope.switchTab = function(index) {
        $scope.tabState = index;
    }
     /* $scope.show = function(){
        $msgbox.show("确定删除吗？", {
            title: "提示"
        }).then(function(){
            console.log(111)
        }, function(){
            console.log(222)
        });
    }; 
        $toast.show("这条消息不能删除")
    }*/
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
    $scope.interviewStrs = [{
        id:1,
        name:"产品1",
        starttime:2017-01-12,
        endtime:2017-05-08,
        status:"待定",
        quantity:8,
    },{
        id:2,
        name:"产品1",
        starttime:2017-01-12,
        endtime:2017-05-08,
        status:"待定",
        quantity:8,
    },{
        id:3,
        name:"产品1",
        starttime:2017-01-12,
        endtime:2017-05-08,
        status:"待定",
        quantity:8,
    },{
        id:4,
        name:"产品1",
        starttime:2017-01-12,
        endtime:2017-05-08,
        status:"待定",
        quantity:8,
    }];
    /*全选按钮的配置*/
    $scope.checkboxes = {
        checked: false,
        items: [],
        ids: {}
    };
    $scope.checkboxes.items = $scope.interviewStrs;
    $scope.resumeCodes = [];
    /*用于监听checkAll是否勾选上，返回的值是其勾选状态*/
    $scope.$watch(function () {
        return $scope.checkboxes.checked;
    }, function (value) {
        angular.forEach($scope.checkboxes.items, function (item) {
            $scope.checkboxes.ids[item.id] = value;
        });
    });
    $scope.$watch(function () {
        return $scope.checkboxes.ids;
    }, function () {
        $scope.selectData = [];
        var checked = 0,
            unchecked = 0,
            total = $scope.checkboxes.items.length;
        angular.forEach($scope.checkboxes.items, function (item) {
            if (($scope.checkboxes.ids[item.id]) || 0) {
                $scope.selectData.push(item);
            }
            checked += ($scope.checkboxes.ids[item.id]) || 0;
            unchecked += (!$scope.checkboxes.ids[item.id]) || 0;
        });
        if ((unchecked == 0) || (checked == 0)) {
            $scope.checkboxes.checked = (checked == total && total > 0);
        }
        $scope.resumeCodes.splice(0, $scope.resumeCodes.length);
        for (var i = 0; i < $scope.selectData.length; i++) {
            $scope.resumeCodes.push($scope.selectData[i].id);
        };
        // grayed checkbox
        angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
    }, true);
})
.controller('mainController', function($rootScope, $scope, $timeout, $q) { 
    $scope.tabState = 1
    $scope.switchTab = function(index) {
        $scope.tabState = index;
    }
})
.controller('pointController', function($rootScope, $scope, $timeout, $q, $uibModal,$msgbox) { 
    $scope.tabState = 1
    $scope.switchTab = function(index) {
        $scope.tabState = index;
    }
    $scope.apply = function(){
        $msgbox.show().then(function(){
            console.log(111)
        }, function(){
            console.log(222)
        });
    };
})
.controller('resumeController', function($rootScope, $scope, $timeout, $q) { 
    $scope.tabState = 1
    $scope.switchTab = function(index) {
        $scope.tabState = index;
    }
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
    $scope.interviewStrs = [{
        id:1,
        name:"产品1",
        starttime:2017-01-12,
        endtime:2017-05-08,
        status:"待定",
        quantity:8,
    },{
        id:2,
        name:"产品1",
        starttime:2017-01-12,
        endtime:2017-05-08,
        status:"待定",
        quantity:8,
    },{
        id:3,
        name:"产品1",
        starttime:2017-01-12,
        endtime:2017-05-08,
        status:"待定",
        quantity:8,
    },{
        id:4,
        name:"产品1",
        starttime:2017-01-12,
        endtime:2017-05-08,
        status:"待定",
        quantity:8,
    }];
    /*全选按钮的配置*/
    $scope.checkboxes = {
        checked: false,
        items: [],
        ids: {}
    };
})
.controller('recommendController', function($rootScope, $scope, $timeout, $q) { 
    $scope.tabState = 1
    $scope.switchTab = function(index) {
        $scope.tabState = index;
    }
    $scope.communicationSkill = 0;
})
.controller('employeesController', function($rootScope, $scope, $timeout, $q) { 
    $scope.tabState = 1
    $scope.switchTab = function(index) {
        $scope.tabState = index;
    }
    var setting1 = {
        view: {
          showIcon:false,
        },
        check: {
          enable: true,
          chkStyle:"radio" ,
          radioType: "level"
        },
        data: {
          simpleData: {
            enable: true
          }
        },
        callback:{
            onCheck: zTreeOnCheck2
        } 
      };
    // 调用接口获取树的数据生成数组
    var zNodes1 = [
        { id: 1, pId: 0, name: "HR管理员：李**", open: true, "nocheck":true},
        { id: 11, pId: 1, name: "HR专员：张**" },
        { id: 12, pId: 1, name: "HR专员：赵**" },
        { id: 13, pId: 1, name: "HR专员：李**" },
        { id: 14, pId: 1, name: "HR专员：孙**" },
        { id: 15, pId: 1, name: "HR专员：张**" },
    ];
       
    $.fn.zTree.init($('#treeDemo'), setting1, zNodes1);
    var setting2 = {
        view: {
          showIcon:false
        },
        check: {
            enable: true,
            chkStyle: "checkbox",
            radioType: "level"
        },
        data: {
          simpleData: {
            enable: true,
          }
        },
        callback:{
            onCheck: zTreeOnCheck
        }
      };
      // 调用接口获取树的数据生成数组
      var zNodes2 = [
        { id: 2, pId: 0, name: "阳光保险集团", open: true },
        { id: 21, pId: 2, name: "市场部", open: true },
        { id: 211, pId: 21, name: "市场一部" },
        { id: 212, pId: 21, name: "市场二部" },
        { id: 213, pId: 21, name: "市场三部" },
        { id: 22, pId: 2, name: "销售部" },
        { id: 23, pId: 2, name: "人力资源部" },
        { id: 24, pId: 2, name: "综合部" },
        { id: 25, pId: 2, name: "财务部" },
      ];
     $.fn.zTree.init($('#treeDemo2'), setting2, zNodes2);
    function zTreeOnCheck(event, treeId, treeNode) {
        var treeObj = $.fn.zTree.getZTreeObj("treeDemo2");
        $scope.nodes = treeObj.getCheckedNodes(true);
        $scope.nodeChecked = [];
        for (var i = 0; i < $scope.nodes.length; i++) {
            var obj = {};
            obj.id = $scope.nodes[i].id;
            obj.pId = $scope.nodes[i].pId;
            obj.name = $scope.nodes[i].name;
            obj.open = true;
            $scope.nodeChecked.push(obj);
        }
        var setting3 = {
            view: {
              showIcon:false
            },
            check: {
                enable: false
            },
            data: {
              simpleData: {
                enable: true
              }
            },
          };
        $.fn.zTree.init($("#treeDemo3"), setting3, $scope.nodeChecked);
    };
    function zTreeOnCheck2 (event, treeId, treeNode) {
        var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
        var HR = treeObj.getCheckedNodes(true);
        $scope.hrName = HR[0].name;
        $('.name').html($scope.hrName+'已关联');
        console.log($scope.hrName);
        
    };
})
.controller('recruitController', function($rootScope, $scope, $timeout, $q) { 
    $scope.tabState = 1
    $scope.switchTab = function(index) {
        $scope.tabState = index;
    }
    $scope.interviewStrs = [{
        id:1,
        name:"产品1",
        starttime:2017-01-12,
        endtime:2017-05-08,
        status:"待定",
        quantity:8,
    },{
        id:2,
        name:"产品1",
        starttime:2017-01-12,
        endtime:2017-05-08,
        status:"待定",
        quantity:8,
    },{
        id:3,
        name:"产品1",
        starttime:2017-01-12,
        endtime:2017-05-08,
        status:"待定",
        quantity:8,
    },{
        id:4,
        name:"产品1",
        starttime:2017-01-12,
        endtime:2017-05-08,
        status:"待定",
        quantity:8,
    }];
})
.controller('positionManageController', function($rootScope, $scope, $timeout, $q) { 
    $scope.tabState = 1
    $scope.switchTab = function(index) {
        $scope.tabState = index;
    }
})
.controller('publishController', function($rootScope, $scope, $timeout, $q) { 
    $scope.tabState = 1
    $scope.switchTab = function(index) {
        $scope.tabState = index;
    }
    $scope.submit = function(){
        $scope.submitted = true
    }
    var todayDate = new Date();
        todayDate.setHours(0);
        todayDate.setMinutes(0);
        todayDate.setSeconds(0);
        todayDate.setMilliseconds(0);
        $scope.todaytime = todayDate.getTime();
        $scope.beforeRenderStartDate = function ($view, $dates, $leftDate, $upDate, $rightDate) {
            var activeDate = moment($scope.todaytime);
            if ($view === 'day') {
                for (var i = 0; i < $dates.length; i++) {
                    if ($dates[i].localDateValue() < activeDate.valueOf()) {
                        $dates[i].selectable = false;
                    }
                }
            } else if ($view === 'hour') {
                if ($leftDate.localDateValue() < activeDate.subtract(1, "day").valueOf()) {
                    for (var i = 0; i < $dates.length; i++) {
                        $dates[i].selectable = false;
                    }
                } else {
                    for (var i = 0; i < $dates.length; i++) {
                        var d = new Date($dates[i].localDateValue());
                        if (d.getHours() <= 6 && d.getHours() >= 0) {
                            $dates[i].selectable = false;
                        }
                    }
                }
            }

        }
})