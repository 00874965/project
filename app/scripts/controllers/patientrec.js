'use strict';

/**
 * @ngdoc function
 * @name gestDiabetesApp.controller:PatientrecCtrl
 * @description
 * # PatientrecCtrl
 * Controller of the gestDiabetesApp
 */
angular.module('gestDiabetesApp')
  .controller('PatientrecCtrl', function ($scope) {
     $scope.mySunData = [];
    $scope.addSunData = function(){
        $scope.mySunData.push($scope.inSunData);
        $scope.inSunData = '';
    };
    $scope.removeSunData = function(remSundata){
        $scope.mySunData.splice($scope.mySunData.indexOf(remSundata),1);
  };
     $scope.myMonData = [];
    $scope.addMonData = function(){
        $scope.myMonData.push($scope.inMonData);
        $scope.inMonData = '';
    };
    $scope.removeMonData = function(remMondata){
        $scope.myMonData.splice($scope.myMonData.indexOf(remMondata),1);
  };
    $scope.myTuesData = [];
    $scope.addTuesData = function(){
        $scope.myTuesData.push($scope.inTuesData);
        $scope.inTuesData = '';
    };
    $scope.removeTuesData = function(remTuesdata){
        $scope.myTuesData.splice($scope.myTuesData.indexOf(remTuesdata),1);
  };
      $scope.myWedData = [];
    $scope.addWedData = function(){
        $scope.myWedData.push($scope.inWedData);
        $scope.inWedData = '';
    };
    $scope.removeWedData = function(remWeddata){
        $scope.myWedData.splice($scope.myWedData.indexOf(remWeddata),1);
  };
     $scope.myThurData = [];
    $scope.addThurData = function(){
        $scope.myThurData.push($scope.inThurData);
        $scope.inThurData = '';
    };
    $scope.removeThurData = function(remThurdata){
        $scope.myThurData.splice($scope.myThurData.indexOf(remThurdata),1);
  };

     $scope.myFriData = [];
    $scope.addFriData = function(){
        $scope.myFriData.push($scope.inFriData);
        $scope.inFriData = '';
    };
    $scope.removeFriData = function(remFridata){
        $scope.myFriData.splice($scope.myFriData.indexOf(remFridata),1);
  };

     $scope.mySatData = [];
    $scope.addSatData = function(){
        $scope.mySatData.push($scope.inSatData);
        $scope.inSatData = '';
    };
    $scope.removeSatData = function(remSatdata){
        $scope.mySatData.splice($scope.mySatData.indexOf(remSatdata),1);
  };

  });
