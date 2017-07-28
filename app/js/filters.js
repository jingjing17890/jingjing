'use strict';

/* Filters */

angular.module('myApp.filters', [])
  .filter("degreeFilter", function (localStorageService,$rootScope) {
        return function (input) {
            var degreeArr = $rootScope.degreeArr
            for (var i = 0; i < degreeArr.length; i++) {
                if (input == degreeArr[i].id) {
                    return degreeArr[i].name;
                }
            }
        }
    })
