var API_URL ='http://112.126.10.148:8080/';
// Declare app level module which depends on filters, and services
/*angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers','ngRoute','ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'main.html', controller: 'interviewController'});
    $routeProvider.when('/interview', {templateUrl: 'interview/interview.html', controller: 'interviewController'});
    $routeProvider.when('/resume', {templateUrl: 'resume/resume.html', controller: 'resumeController'});
    $routeProvider.when('/point', {templateUrl: 'point/point.html', controller: 'pointController'});
    $routeProvider.when('/employees', {templateUrl: 'employees/employees.html', controller: 'employeesController'})
    $routeProvider.when('/recruit', {templateUrl: 'recruit/recruit.html', controller: 'recruitController'})
    $routeProvider.otherwise({redirectTo: '/'});
  }])
  .run(['$rootScope',function($rootScope){
    $rootScope.nativeId=getCurrentNativeId();
    function getCurrentNativeId(){
      var str = "#/index";
      var href=window.location.href;
      var index = href.indexOf("#/");
      if(index != -1){
        str = href.substring(index,href.length);
      }
      return str;
    }
  }]) */
  angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers','ui.router' ,'ui.bootstrap.datetimepicker', 'ui.bootstrap', 'ng.ueditor']).
  config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/");
    $stateProvider
        .state("main", {
            url: "/",
            templateUrl: 'main.html',
            controller: 'mainController'
        })
        .state("interview", {
            url: "/interview",
            templateUrl: 'interview/interview.html',
            controller: 'interviewController'
        })
        .state("resume", {
            url: "/resume",
            templateUrl: 'resume/resume.html',
            controller: 'resumeController'
        })
        .state("point", {
            url: "/point",
            templateUrl: 'point/point.html',
            controller: 'pointController'
        })
        .state("employees", {
            url: "/employees",
            templateUrl: 'employees/employees.html',
            controller: 'employeesController'
        })
        .state("recruit", {
            url: "/recruit",
            templateUrl: 'recruit/recruit.html',
            controller: 'recruitController'
        })
        .state("publish", {
            url: "/publish",
            templateUrl: 'recruit/publish.html',
            controller: 'publishController'
        })
        .state("recommend", {
            url: "/recommend",
            templateUrl: 'recommend/recommend.html',
            controller: 'recommendController'
        })
        .state("position", {
            url: "/position",
            templateUrl: 'recruit/position_manage.html',
            controller: 'positionManageController'
        })
        .state("template", {
            url: "/template",
            templateUrl: 'recruit/tempalte.html',
            controller: 'templateController'
        })
        .state("verify", {
            url: "/verify",
            templateUrl: 'recruit/verify.html',
            controller: 'verifyController'
        })
        .state("message", {
            url: "/message",
            templateUrl: 'message.html',
            controller: 'messageController'
        })
        .state("applybuy", {
            url: "/applybuy",
            templateUrl: 'resume/apply_buy.html',
            controller: 'applybuyController'
        })
        .state("buy", {
            url: "/buy",
            templateUrl: 'resume/buy.html',
            controller: 'buyController'
        })
        .state("phone", {
            url: "/phone",
            templateUrl: 'resume/phone.html',
            controller: 'phoneController'
        })
  })
  .run(['$rootScope',function($rootScope){
    $rootScope.nativeId=getCurrentNativeId();
    function getCurrentNativeId(){
      var str = "#/index";
      var href=window.location.href;
      var index = href.indexOf("#/");
      if(index != -1){
        str = href.substring(index,href.length);
      }
      return str;
    }
  }])