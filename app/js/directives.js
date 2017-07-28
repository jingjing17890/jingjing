'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('native',['$rootScope',function($rootScope,$cookies){
    return{
      restrict:'A',
      link:function(scope,element,attrs){
              $(element).click(function(){
                      scope.$apply(function(){
                              $rootScope.nativeId = attrs.href;
                      });
              });
      }
    }
  }])
  .directive('starRating', function () {
    return {
        scope: {
            ngrating: '=',
            maxRating: '@',
            readOnly: '@',
            click: "&",
            mouseHover: "&",
            mouseLeave: "&"
        },
        restrict: 'EA',
        //template:
        //    "<div style='display: inline-block; margin: 0px; padding: 0px; cursor:pointer; ' ng-repeat='idx in maxRatings track by $index'> \
        //            <img style='outline:0px;' ng-src='{{((hoverValue + _rating) <= $index) && \"assets/images/star-empty-lg.png\" || \"assets/images/star-fill-lg.png\"}}' \
        //            ng-Click='isolatedClick($index + 1)' \
        //            ng-mouseenter='isolatedMouseHover($index + 1)' \
        //            ng-mouseleave='isolatedMouseLeave($index + 1)'> \
        //    </div>",
        template: "<div style='display: inline-block; margin: 0px; padding: 0px; cursor:pointer; padding: 5px;' ng-repeat='idx in maxRatings track by $index'> \
                    <img style='outline:0px; padding: 0; margin: 0; float: left;' ng-src='{{((hoverValue + _rating) <= $index) && \"img/star-empty-lg-left.png\" || \"img/star-fill-lg-left.png\"}}' \
                    ng-Click='isolatedClick($index + 0.5)' \
                    ng-mouseenter='isolatedMouseHover($index + 0.5)' \
                    ng-mouseleave='isolatedMouseLeave($index + 0.5)'> \
                    <img style='outline:0px; padding: 0; margin: 0; float: left;' ng-src='{{((hoverValue - 0.5 + _rating) <= $index) && \"img/star-empty-lg-right.png\" || \"img/star-fill-lg-right.png\"}}' \
                    ng-Click='isolatedClick($index + 1)' \
                    ng-mouseenter='isolatedMouseHover($index + 1)' \
                    ng-mouseleave='isolatedMouseLeave($index + 1)'> \
            </div>",
        compile: function (element, attrs) {
            if (!attrs.maxRating || (Number(attrs.maxRating) <= 0)) {
                attrs.maxRating = '5';
            }
            ;
        },
        controller: function ($scope, $element, $attrs) {
            $scope.maxRatings = [];

            for (var i = 1; i <= $scope.maxRating; i++) {
                $scope.maxRatings.push({});
            }
            ;

            $scope.$watch('ngrating', function () {
                $scope._rating = $scope.ngrating;
            });


            $scope.isolatedClick = function (param) {
                if ($scope.readOnly == 'true') return;

                $scope.ngrating = $scope._rating = param;
                $scope.hoverValue = 0;
                $scope.click({
                    param: param
                });
            };

            $scope.isolatedMouseHover = function (param) {
                if ($scope.readOnly == 'true') return;

                //$scope.ngrating = 0;
                $scope._rating = 0;
                $scope.hoverValue = param;
                $scope.mouseHover({
                    param: param
                });
            };

            $scope.isolatedMouseLeave = function (param) {
                if ($scope.readOnly == 'true') return;

                $scope._rating = $scope.ngrating;
                $scope.hoverValue = 0;
                $scope.mouseLeave({
                    param: param
                });
            };
        }
    };
})
.directive('jobtable', function () {
    return {
        template: '<div>' +
        '<input class="job_type_box" id="jobTypeName" type="text" placeholder="请选择" readonly ng-model="jobTypeName" style="cursor: pointer"/>' +
        '<input style="display:none" id="jobType" type="text" ng-model="jobType" />' +
        '<div class="all_jobType" style="display: none;">' +
        '<span class="close_job" style="display:inline-block;float:right;font-size:20px;cursor:pointer;">×</span>' +
        '<ul>' +
        '<li class="fl levelOneJob">' +
        '<span class="fl mr15 level1">IT|互联网|通信：</span>' +
        '<ul class="ul_levelTwoJob fl">' +
        '<li class="fl mr20 level2">软件/互联网开发/系统集成' +
        '<div style="width: 512px; top: -104px; left: 338px; display: none;" class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36215"class="level3">WEB前端开发</span>' +
        '<span jobid="36214"class="level3">软件研发工程师</span>' +
        '<span jobid="36213"class="level3">高级软件工程师</span>' +
        '<span jobid="36212"class="level3">软件工程师</span>' +
        '<span jobid="36216"class="level3">互联网软件工程师</span>' +
        '<span jobid="36217"class="level3">网页设计/制作/美工</span>' +
        '<span jobid="36218"class="level3">手机软件开发工程师</span>' +
        '<span jobid="36231"class="level3">语音/视频/图形开发</span>' +
        '<span jobid="36230"class="level3">系统分析员</span>' +
        '<span jobid="36229"class="level3">ERP技术/开发应用</span>' +
        '<span jobid="36228"class="level3">游戏策划</span>' +
        '<span jobid="36227"class="level3">系统集成工程师</span>' +
        '<span jobid="36226"class="level3">需求工程师</span>' +
        '<span jobid="36224"class="level3">嵌入式软件开发</span>' +
        '<span jobid="36223"class="level3">游戏设计/开发</span>' +
        '<span jobid="36222"class="level3">系统架构设计师</span>' +
        '<span jobid="36221"class="level3">数据库开发工程师</span>' +
        '<span jobid="36220"class="level3">移动互联网开发</span>' +
        '<span jobid="36219"class="level3">用户界面（UI）设计</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">互联网产品/运营管理' +
        '<div style="width: 342px; top: -59px; left: 479px; display: none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36211"class="level3">电子商务经理/主管</span>' +
        '<span jobid="36210"class="level3">互联网产品专员/助理</span>' +
        '<span jobid="36209"class="level3">电子商务专员/助理</span>' +
        '<span jobid="36208"class="level3">SEO/SEM</span>' +
        '<span jobid="36207"class="level3">网站编辑</span>' +
        '<span jobid="36206"class="level3">网络运营专员/助理</span>' +
        '<span jobid="36205"class="level3">网络运营管理</span>' +
        '<span jobid="36204"class="level3">互联网产品经理/主管</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">IT管理/项目协调' +
        '<div style="display:none;width: 342px; top: -59px; left: 479px; "class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36180"class="level3">IT项目总监</span>' +
        '<span jobid="36179"class="level3">IT技术/研发总监</span>' +
        '<span jobid="36178"class="level3">IT项目执行/协调人员</span>' +
        '<span jobid="36177"class="level3">IT技术/研发经理/主管</span>' +
        '<span jobid="36176"class="level3">IT项目经理/主管</span>' +
        '<span jobid="36181"class="level3">CTO/CIO</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">IT运维/技术支持' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36182"class="level3">IT技术支持/维护工程师</span>' +
        '<span jobid="36183"class="level3">网络工程师</span>' +
        '<span jobid="36196"class="level3">IT文档工程师</span>' +
        '<span jobid="36195"class="level3">Helpdesk</span>' +
        '<span jobid="36194"class="level3">IT技术文员/助理</span>' +
        '<span jobid="36193"class="level3">信息技术经理/主管</span>' +
        '<span jobid="36192"class="level3">计算机硬件维护工程师</span>' +
        '<span jobid="36191"class="level3">系统管理员</span>' +
        '<span jobid="36190"class="level3">信息技术专员</span>' +
        '<span jobid="36189"class="level3">网络与信息安全工程师</span>' +
        '<span jobid="36188"class="level3">ERP实施顾问</span>' +
        '<span jobid="36187"class="level3">数据库管理员</span>' +
        '<span jobid="36186"class="level3">IT技术支持/维护经理</span>' +
        '<span jobid="36185"class="level3">系统工程师</span>' +
        '<span jobid="36184"class="level3">网络管理员</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">IT质量管理/测试/配置管理' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36203"class="level3">信息技术标准化工程师</span>' +
        '<span jobid="36202"class="level3">配置管理工程师</span>' +
        '<span jobid="36201"class="level3">IT质量管理经理/主管</span>' +
        '<span jobid="36199"class="level3">硬件测试</span>' +
        '<span jobid="36198"class="level3">系统测试</span>' +
        '<span jobid="36197"class="level3">软件测试</span>' +
        '<span jobid="36200"class="level3">IT质量管理工程师</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">硬件开发' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36235"class="level3">嵌入式硬件开发</span>' +
        '<span jobid="36234"class="level3">高级硬件工程师</span>' +
        '<span jobid="36233"class="level3">硬件工程师</span>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="fl levelOneJob">' +
        '<span class="fl mr15 level1">销售|客服|市场：</span>' +
        '<ul class="ul_levelTwoJob fl">' +
        '<li class="fl mr20 level2">市场' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36040"class="level3">市场营销经理</span>' +
        '<span jobid="36039"class="level3">业务拓展专员/助理</span>' +
        '<span jobid="36038"class="level3">市场经理</span>' +
        '<span jobid="36037"class="level3">市场营销专员/助理</span>' +
        '<span jobid="36036"class="level3">市场专员/助理</span>' +
        '<span jobid="36044"class="level3">市场策划/企划专员/助理</span>' +
        '<span jobid="36057"class="level3">促销主管/督导</span>' +
        '<span jobid="36056"class="level3">品牌主管</span>' +
        '<span jobid="36055"class="level3">品牌专员/助理</span>' +
        '<span jobid="36054"class="level3">产品专员/助理</span>' +
        '<span jobid="36053"class="level3">品牌经理</span>' +
        '<span jobid="36052"class="level3">活动执行</span>' +
        '<span jobid="36051"class="level3">市场调研与分析</span>' +
        '<span jobid="36045"class="level3">市场总监</span>' +
        '<span jobid="36049"class="level3">产品经理</span>' +
        '<span jobid="36048"class="level3">市场营销主管</span>' +
        '<span jobid="36047"class="level3">活动策划</span>' +
        '<span jobid="36058"class="level3">促销员</span>' +
        '<span jobid="36043"class="level3">市场策划/企划经理/主管</span>' +
        '<span jobid="36042"class="level3">市场文案策划</span>' +
        '<span jobid="36050"class="level3">市场主管</span>' +
        '<span jobid="36041"class="level3">业务拓展经理/主管</span>' +
        '<span jobid="36046"class="level3">网站推广</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">销售管理' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36069"class="level3">渠道/分销总监</span>' +
        '<span jobid="36063"class="level3">区域销售经理/主管</span>' +
        '<span jobid="36068"class="level3">区域销售总监</span>' +
        '<span jobid="36067"class="level3">客户主管</span>' +
        '<span jobid="36066"class="level3">业务拓展经理/主管</span>' +
        '<span jobid="36065"class="level3">渠道/分销经理/主管</span>' +
        '<span jobid="36064"class="level3">大客户销售经理</span>' +
        '<span jobid="36062"class="level3">销售总监</span>' +
        '<span jobid="36061"class="level3">客户经理</span>' +
        '<span jobid="36060"class="level3">销售主管</span>' +
        '<span jobid="36059"class="level3">销售经理</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">销售业务' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36081"class="level3">大客户销售代表</span>' +
        '<span jobid="36080"class="level3">客户代表</span>' +
        '<span jobid="36079"class="level3">电话销售</span>' +
        '<span jobid="36078"class="level3">销售代表</span>' +
        '<span jobid="36082"class="level3">销售工程师</span>' +
        '<span jobid="36083"class="level3">渠道/分销专员</span>' +
        '<span jobid="36084"class="level3">业务拓展专员/助理</span>' +
        '<span jobid="36089"class="level3">医药代表</span>' +
        '<span jobid="36088"class="level3">团购业务员</span>' +
        '<span jobid="36087"class="level3">销售业务跟单</span>' +
        '<span jobid="36086"class="level3">网络/在线销售</span>' +
        '<span jobid="36085"class="level3">区域销售专员/助理</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">销售行政/商务' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36077"class="level3">销售培训师/讲师</span>' +
        '<span jobid="36076"class="level3">销售数据分析</span>' +
        '<span jobid="36075"class="level3">销售运营经理/主管</span>' +
        '<span jobid="36074"class="level3">销售行政经理/主管</span>' +
        '<span jobid="36073"class="level3">商务经理/主管</span>' +
        '<span jobid="36072"class="level3">销售运营专员/助理</span>' +
        '<span jobid="36071"class="level3">商务专员/助理</span>' +
        '<span jobid="36070"class="level3">销售行政专员/助理</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">客服/售前/售后技术支持' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36027"class="level3">客户服务专员/助理</span>' +
        '<span jobid="36035"class="level3">客户服务总监</span>' +
        '<span jobid="36034"class="level3">客户关系/投诉协调人员</span>' +
        '<span jobid="36033"class="level3">客户服务主管</span>' +
        '<span jobid="36032"class="level3">客户服务经理</span>' +
        '<span jobid="36031"class="level3">售前/售后技术支持管理</span>' +
        '<span jobid="36030"class="level3">售前/售后技术支持工程师</span>' +
        '<span jobid="36028"class="level3">客户咨询热线/呼叫中心人员</span>' +
        '<span jobid="36029"class="level3">网络/在线客服</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">公关/媒介' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36020"class="level3">政府事务管理</span>' +
        '<span jobid="36019"class="level3">公关总监</span>' +
        '<span jobid="36018"class="level3">媒介策划/管理</span>' +
        '<span jobid="36017"class="level3">媒介经理/主管</span>' +
        '<span jobid="36016"class="level3">媒介专员/助理</span>' +
        '<span jobid="36015"class="level3">公关专员/助理</span>' +
        '<span jobid="36014"class="level3">公关经理/主管</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">广告/会展' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36025"class="level3">广告客户代表</span>' +
        '<span jobid="36024"class="level3">会展策划/设计</span>' +
        '<span jobid="36023"class="level3">广告创意/设计师</span>' +
        '<span jobid="36022"class="level3">广告客户经理</span>' +
        '<span jobid="36021"class="level3">广告文案策划</span>' +
        '<span jobid="36026"class="level3">会务专员/助理</span>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="fl levelOneJob">' +
        '<span class="fl mr15 level1">财务|人力资源|行政：</span>' +
        '<ul class="ul_levelTwoJob fl">' +
        '<li class="fl mr20 level2">财务/审计/税务' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36146"class="level3">会计经理/主管</span>' +
        '<span jobid="36145"class="level3">会计助理/文员</span>' +
        '<span jobid="36144"class="level3">财务经理</span>' +
        '<span jobid="36143"class="level3">财务助理</span>' +
        '<span jobid="36142"class="level3">出纳员</span>' +
        '<span jobid="36141"class="level3">会计/会计师</span>' +
        '<span jobid="36147"class="level3">财务主管/总帐主管</span>' +
        '<span jobid="36148"class="level3">审计专员/助理</span>' +
        '<span jobid="36149"class="level3">财务总监</span>' +
        '<span jobid="36150"class="level3">审计经理/主管</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">人力资源' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36164"class="level3">人力资源经理</span>' +
        '<span jobid="36163"class="level3">招聘经理/主管</span>' +
        '<span jobid="36162"class="level3">人力资源主管</span>' +
        '<span jobid="36161"class="level3">招聘专员/助理</span>' +
        '<span jobid="36160"class="level3">人力资源专员/助理</span>' +
        '<span jobid="36159"class="level3">人事信息系统</span>' +
        '<span jobid="36165"class="level3">培训专员/助理</span>' +
        '<span jobid="36175"class="level3">管理</span>' +
        '<span jobid="36174"class="level3">企业培训师/讲师</span>' +
        '<span jobid="36173"class="level3">薪酬福利经理/主管</span>' +
        '<span jobid="36172"class="level3">绩效考核经理/主管</span>' +
        '<span jobid="36171"class="level3">绩效考核专员/助理</span>' +
        '<span jobid="36170"class="level3">薪酬福利专员/助理</span>' +
        '<span jobid="36169"class="level3">员工关系/企业文化/工会</span>' +
        '<span jobid="36168"class="level3">人力资源总监</span>' +
        '<span jobid="36167"class="level3">培训经理/主管</span>' +
        '<span jobid="36166"class="level3">猎头顾问/助理</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">行政/后勤/文秘' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36158"class="level3">行政总监</span>' +
        '<span jobid="36157"class="level3">电脑操作/打字/录入员</span>' +
        '<span jobid="36156"class="level3">文档/资料管理</span>' +
        '<span jobid="36155"class="level3">后勤人员</span>' +
        '<span jobid="36154"class="level3">行政经理/主管/办公室主任</span>' +
        '<span jobid="36153"class="level3">前台/总机/接待</span>' +
        '<span jobid="36152"class="level3">助理/秘书/文员</span>' +
        '<span jobid="36151"class="level3">行政专员/助理</span>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="fl levelOneJob">' +
        '<span class="fl mr15 level1">传媒|印刷|艺术|设计：</span>' +
        '<ul class="ul_levelTwoJob fl">' +
        '<li class="fl mr20 level2">艺术/设计' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36129" class="level3">游戏界面设计</span>' +
        '<span jobid="36128" class="level3">Flash设计/开发</span>' +
        '<span jobid="36127" class="level3">包装设计</span>' +
        '<span jobid="36126" class="level3">工业设计</span>' +
        '<span jobid="36125" class="level3">原画师</span>' +
        '<span jobid="36124" class="level3">用户体验（UE/UX）设计</span>' +
        '<span jobid="36123" class="level3">CAD设计/制图</span>' +
        '<span jobid="36122" class="level3">艺术/设计总监</span>' +
        '<span jobid="36121" class="level3">多媒体/动画设计</span>' +
        '<span jobid="36120" class="level3">店面/展览/展示/陈列设计</span>' +
        '<span jobid="36119" class="level3">三维/3D设计/制作</span>' +
        '<span jobid="36118" class="level3">视觉设计</span>' +
        '<span jobid="36117" class="level3">美术编辑/美术设计</span>' +
        '<span jobid="36116" class="level3">平面设计</span>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="fl levelOneJob">' +
        '<span class="fl mr15 level1">咨询|法律|教育|翻译：</span>' +
        '<ul class="ul_levelTwoJob fl">' +
        '<li class="fl mr20 level2">咨询/顾问/调研/数据分析' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36012"class="level3">数据分析师</span>' +
        '<span jobid="36013"class="level3">咨询经理/主管</span>' +
        '<span jobid="36011"class="level3">专业顾问</span>' +
        '<span jobid="36010"class="level3">咨询顾问/咨询员</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">律师/法务/合规' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36009"class="level3">律师助理</span>' +
        '<span jobid="36008"class="level3">律师</span>' +
        '<span jobid="36007"class="level3">知识产权/专利顾问/代理人</span>' +
        '<span jobid="36006"class="level3">法务经理/主管</span>' +
        '<span jobid="36005"class="level3">法务专员/助理</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">教育/培训' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36004"class="level3">培训助理/助教</span>' +
        '<span jobid="36003"class="level3">培训师/讲师</span>' +
        '<span jobid="36002"class="level3">培训/招生/课程顾问</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">翻译（口译与笔译）' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36001"class="level3">英语翻译</span>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="fl levelOneJob">' +
        '<span class="fl mr15 level2">项目|质量|高级管理：</span>' +
        '<ul class="ul_levelTwoJob fl">' +
        '<li class="fl mr20 level2">项目管理/项目协调' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36102"class="level3">项目总监</span>' +
        '<span jobid="36101"class="level3">项目专员/助理</span>' +
        '<span jobid="36100"class="level3">项目经理/项目主管</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">高级管理' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36099"class="level3">总编/副总编</span>' +
        '<span jobid="36098"class="level3">首席财务官CFO</span>' +
        '<span jobid="36096"class="level3">合伙人</span>' +
        '<span jobid="36095"class="level3">分公司/代表处负责人</span>' +
        '<span jobid="36094"class="level3">首席运营官COO</span>' +
        '<span jobid="36093"class="level3">首席执行官CEO/总裁/总经理</span>' +
        '<span jobid="36097"class="level3">CTO/CIO</span>' +
        '<span jobid="36092"class="level3">副总裁/副总经理</span>' +
        '<span jobid="36091"class="level3">部门/事业部管理</span>' +
        '<span jobid="36090"class="level3">总裁助理/总经理助理</span>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="fl levelOneJob">' +
        '<span class="fl mr15 level2">采购|贸易|交通|物流：</span>' +
        '<ul class="ul_levelTwoJob fl">' +
        '<li class="fl mr20 level2">交通运输服务' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36135"class="level3">机动车司机/驾驶</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">采购/贸易' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36134"class="level3">外贸/贸易经理/主管</span>' +
        '<span jobid="36133"class="level3">贸易跟单</span>' +
        '<span jobid="36132"class="level3">采购经理/主管</span>' +
        '<span jobid="36131"class="level3">外贸/贸易专员/助理</span>' +
        '<span jobid="36130"class="level3">采购专员/助理</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">物流/仓储' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36140"class="level3">仓库经理/主管</span>' +
        '<span jobid="36139"class="level3">快递员/速递员</span>' +
        '<span jobid="36138"class="level3">物流经理/主管</span>' +
        '<span jobid="36137"class="level3">仓库/物料管理员</span>' +
        '<span jobid="36136"class="level3">物流专员/助理</span>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="fl levelOneJob">' +
        '<span class="fl mr15 level2">兼职|实习|社工|其他：</span>' +
        '<ul class="ul_levelTwoJob fl">' +
        '<li class="fl mr20 level2">实习生/培训生/储备干部' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36113"class="level3">实习生</span>' +
        '<span jobid="36114"class="level3">储备干部</span>' +
        '<span jobid="36115"class="level3">培训生</span>' +
        '</div>' +
        '</li>' +
        '<li class="fl mr20 level2">兼职/临时' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36112"class="level3">临时</span>' +
        '<span jobid="36111"class="level3">兼职</span>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="fl levelOneJob">' +
        '<span class="fl mr15 level2">生产|制造：</span>' +
        '<ul class="ul_levelTwoJob fl">' +
        '<li class="fl mr20 level2">技工/操作工' +
        '<div style="display:none;"class="levelThreeJob">' +
        '<p class="close_job_3" style="display:block;float:right;font-size:20px;cursor:pointer;">×</p>' +
        '<span jobid="36110"class="level3">水工/木工/油漆工</span>' +
        '<span jobid="36109"class="level3">空调工/电梯工/锅炉工</span>' +
        '<span jobid="36108"class="level3">电焊工/铆焊工</span>' +
        '<span jobid="36107"class="level3">车床/磨床/铣床/冲床工</span>' +
        '<span jobid="36106"class="level3">汽车维修/保养</span>' +
        '<span jobid="36105"class="level3">钳工/机修工/钣金工</span>' +
        '<span jobid="36104"class="level3">电工</span>' +
        '<span jobid="36103"class="level3">普工/操作工</span>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>',
        replace: true,
        transclude: true,
        restrict: 'E',
        scope: {
            jobType: "=",
            jobTypeName: "=",
            onChangeNotify: "&onChange",
        },
        controller: function ($scope, $element) {

        },
        link: function (scope, element, attrs, rootScope) {
            var levelTwo = function (event) {
                var oThis = $(this);
                var iLeft = this.offsetLeft; //左边距
                var iTop = this.offsetTop; //上边距
                var iWidth = this.clientWidth + 12; //文字宽度
                //$('.levelThreeJob:visible').hide();
                $('.levelThreeJob').hide();
                var oDiv = oThis.children('div');
                var iSpanNum = oDiv.find('span').length;
                if (iSpanNum <= 8) {
                    oDiv.css({
                        'width': '200px'
                    });
                } else if (iSpanNum < 16) {
                    oDiv.css({
                        'width': '380px'
                    });
                } else {
                    oDiv.css({
                        'width': '385px'
                    });
                }
                var iUlHeight = oDiv.height(); //选框高度
                var iHeight = 0;
                /*$('.two-select').removeClass('two-select');
                  oThis.addClass('two-select');*/
                if ($('.levelThreeJob').hasClass('two-select')) {
                    $('.levelThreeJob').removeClass('two-select');
                    return;
                }
                if (iUlHeight < 40) {
                    iHeight = 0;
                } else {
                    iHeight = iUlHeight / 2;
                }
                oDiv.css({
                    'top': iTop - iHeight,
                    'left': iLeft + iWidth
                }).show();
            };
            var levelThree = function () {
                var oThis = $(this);
                var sJobId = oThis.attr('jobId');
                var sJobName = oThis.text();
                $('#jobTypeName').val(sJobName);
                $('#jobType').val(sJobId);
                scope.$parent.jobType = sJobId;
                scope.$parent.jobTypeName = sJobName;
                scope.onChangeNotify();
                scope.$apply();
                $(this).parent().hide();
                $('.all_jobType').hide();
            };
            var closeLevelThree = function () {
                var oThis = $(this);
                oThis.parent().hide();
                oThis.parent().addClass('two-select');
            };
            var fnJobTypeOnClick = function (event) {
                $('.levelThreeJob').hide();
                $('.all_jobType').show();
                //if (event.pageX > $('.all_jobType').width()) {
                //    $('.all_jobType').css('left', '-780px');
                //} else {
                $('.all_jobType').css('left', element.offsetLeft + 'px');
                //}
            };
            $('body').on('click', function (event) {
                var e = event || window.event;
                var flag = false; //flag为true的时候表示需要关闭弹出层ng
                /*判断点击的是否是level2*/
                var level2 = $('.level2');
                for (var i = 0; i < level2.length; i++) {
                    if (level2[i] == e.target) {
                        flag = true;
                    }
                }
                /*判断点击的是否是level1*/
                var level1 = $('.level1');
                for (var i = 0; i < level1.length; i++) {
                    if (level1[i] == e.target) {
                        flag = true;
                    }
                }
                /*判断点击的是否是level2*/
                var close_job_3 = $('.close_job_3');
                for (var i = 0; i < close_job_3.length; i++) {
                    if (close_job_3[i] == e.target) {
                        flag = true;
                    }
                }
                /*判断点击的是否是all_jobType*/
                var all_jobType = $('.all_jobType');
                for (var i = 0; i < all_jobType.length; i++) {
                    if (all_jobType[i] == e.target) {
                        flag = true;
                    }
                }
                if (e.target == $('#jobTypeName')[0]) {
                    //不需要关闭弹出层
                    flag = true;
                }
                /*判断点击的是否是level2*/
                var levelOneJob = $('.levelOneJob');
                for (var i = 0; i < levelOneJob.length; i++) {
                    if (levelOneJob[i] == e.target) {
                        flag = true;
                    }
                }
                /*判断点击的是否是all_jobType*/
                var ul_levelTwoJob = $('.ul_levelTwoJob');
                for (var i = 0; i < ul_levelTwoJob.length; i++) {
                    if (ul_levelTwoJob[i] == e.target) {
                        flag = true;
                    }
                }
                var levelThreeJob = $('.levelThreeJob');
                for (var i = 0; i < levelThreeJob.length; i++) {
                    if (levelThreeJob[i] == e.target) {
                        flag = true;
                    }
                }
                if (!flag) {
                    $('.levelThreeJob').hide();
                    $('.all_jobType').hide();
                }
            });
            $('.all_jobType').on('click', '.ul_levelTwoJob>li', levelTwo);
            $('.all_jobType').on('click', '.levelThreeJob>span', levelThree);
            $('.all_jobType').on('click', '.levelThreeJob>p', closeLevelThree);
            $('#jobTypeName').on('click', fnJobTypeOnClick);
            $('.close_job').on('click', function () {
                if ($('#jobTypeName').val() == '') {
                    $('#jobTypeName').val('');
                    $('#jobType').val('');
                }
                $('.levelThreeJob').hide();
                $('.all_jobType').hide();
            });
        }
    };
})