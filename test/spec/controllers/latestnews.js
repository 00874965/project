'use strict';

describe('Controller: LatestnewsCtrl', function () {

  // load the controller's module
  beforeEach(module('gestDiabetesApp'));

  var LatestnewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LatestnewsCtrl = $controller('LatestnewsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
