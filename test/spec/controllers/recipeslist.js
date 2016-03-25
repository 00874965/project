'use strict';

describe('Controller: RecipeslistCtrl', function () {

  // load the controller's module
  beforeEach(module('gestDiabetesApp'));

  var RecipeslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipeslistCtrl = $controller('RecipeslistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
