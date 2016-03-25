'use strict';

angular.module('gestDiabetesApp')
  .controller('MedirecordCtrl', function ($scope) {
    $scope.patients = [
        {fname:'Jenny', lname: 'Power', patientID: '12678', duedate: '02/02/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Trish', lname: 'Burke', patientID: '56765', duedate: '12/07/2016' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Susan', lname: 'McDonald', patientID: '87678', duedate: '22/01/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Mary', lname: 'Smith', patientID: '98656', duedate: '03/05/2016' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Martina', lname: 'Troy', patientID: '34543', duedate: '30/09/2016' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Lotti', lname: 'Jackson', patientID: '76443', duedate: '30/09/2016' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Breda', lname: 'Dwyer', patientID: '53463', duedate: '02/12/2016' , telno: '12345', addresss:'1 Baker St', insulinIND: 'Y', readings: 'PatientrecTableLink' },
        {fname:'Frances', lname: 'Power', patientID: '12123', duedate: '10/10/2016' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Siobhan', lname: 'ODonnel', patientID: '45654', duedate: '21/11/2016' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Amy', lname: 'McGrath', patientID: '09868', duedate: '19/01/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Anne', lname: 'Fitzpatrick', patientID: '56477', duedate: '23/08/2016' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Emma', lname: 'Dwyer', patientID: '76845', duedate: '20/07/2016' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Tess', lname: 'Burke', patientID: '87987', duedate: '11/01/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Claire', lname: 'Dwan', patientID: '34576', duedate: '23/06/2016' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Beth', lname: 'McGrath', patientID: '98753', duedate: '02/06/2016' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Lisa', lname: 'Power', patientID: '12456', duedate: '02/02/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Anthea', lname: 'OSullivan', patientID: '65456', duedate: '02/02/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Alice', lname: 'Callahan', patientID: '87689', duedate: '02/02/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'Y', readings: 'PatientrecTableLink' },
        {fname:'Edek', lname: 'Grant', patientID: '65467', duedate: '02/02/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Erica', lname: 'Tynan', patientID: '98678', duedate: '02/02/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Louise', lname: 'Rowan', patientID: '34567', duedate: '02/02/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Sara', lname: 'Shelly', patientID: '98678', duedate: '02/02/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Donna', lname: 'Griffin', patientID: '24556', duedate: '02/02/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Cathy', lname: 'Grant', patientID: '64677', duedate: '02/02/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        {fname:'Cait', lname: 'Power', patientID: '77577', duedate: '02/02/2017' , telno: '12345', addresss:'1 Baker St', insulinIND: 'N', readings: 'PatientrecTableLink' },
        ];
});
