'use strict';

/**
 * @ngdoc overview
 * @name gestDiabetesApp
 * @description
 * # gestDiabetesApp
 *
 * Main module of the application.
 */
angular
  .module('gestDiabetesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'

  ])

  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

       .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'AboutCtrl'
      })

        .when('/recipes', {
        templateUrl: 'views/recipes.html',
        controller: 'RecipesCtrl'
      })

     .when('/recipeslist', {
        templateUrl: 'views/recipeslist.html',
        controller: 'RecipeslistCtrl'
      })
     
        .when('/medirecord', {
        templateUrl: 'views/medirecord.html',
        controller: 'MedirecordCtrl'
      })

         .when('/patientrecord', {
        templateUrl: 'views/patientrecord.html',
        controller: 'PatientrecordCtrl'
      
      })

      .when('/newsblog', {
        templateUrl: 'views/newsblog.html',
        controller: 'BlogCtrl'
      })
      .when('/patientrec', {
        templateUrl: 'views/patientrec.html',
        controller: 'PatientrecCtrl'
      })
      .when('/latestnews', {
        templateUrl: 'views/latestnews.html',
        controller: 'LatestnewsCtrl'
      })

 
      .otherwise({
        redirectTo: '/'
      });
  });
