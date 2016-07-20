'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
    socket.on('send:name', function (data) {
      $scope.name = data.name;
    });
  }).
  controller('MyCtrl1', function ($scope, socket) {
    socket.on('send:time', function (data) {
      $scope.time = data.time;
    });
    socket.on('network:list', function (data) {
      $scope.networks= data.networks;
    });
  socket.on('error:list', function (data) {
    $scope.errors= data.errors;
  });
  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here
  });
