'use strict';

describe('Controller: PatientrecCtrl', function () {

  // load the controller's module
  beforeEach(module('gestDiabetesApp'));

  var PatientrecCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PatientrecCtrl = $controller('PatientrecCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
