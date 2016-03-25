'use strict';
/**
 * @ngdoc function
 * @name gestDiabetesApp.controller:LatestnewsCtrl
 * @description
 * # LatestnewsCtrl
 * Controller of the gestDiabetesApp
 */
angular.module('gestDiabetesApp')
  .controller('LatestnewsCtrl', function ($scope) {
    $scope.posts = [{
      title: 'Long Term Illness Status removed for Gestational Diabetics',
      upvotes: 0,
      description: 'Medical costs for Gestational Diabetics are on average E150 a month. This used to be covered by the medical card LTD scheme but not any longer ... read on here',
      link: 'http://www.thejournal.ie/gestational-diabetes-ireland-2647392-Mar2016/'
    }, {
      title: 'Early Diabetes Detection research but no reference to GD ..',
      upvotes: 0,
      description: 'Plans for early Diabetes dedection MUST include mandatory testing for Gestational Diabetes ...',
      link: 'https://www.diabetes.ie/campaign-launched-to-encourage-earlier-diagnosis-of-type-1-diabetes-in-children-and-adolescents/'
    }, {
      title: 'Latest Recipe - please try and rate with your readings everyone!!',
      upvotes: 0,
      description: 'Chickpea Surprise....great on the go great as a side or a snack, Avg Blood Sugar Level Reading 4.3',
      link: '#/recipes'
   }];

    $scope.addPost = function() {
      if ($scope.title === null || $scope.title === '') {
        return;
      }
      $scope.posts.push({
        title: $scope.title,
        description: $scope.description,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.description = '';
      $scope.link = '';
    };
    $scope.upvote = function(post) {
      post.upvotes += 1;
    };
  });