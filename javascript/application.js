  var myApp = angular.module('myApp', ['ngRoute']);

  myApp.config(function($routeProvider){
    $routeProvider
      .when('/',
      {
        controller: 'SimpleController',
        templateUrl: 'partials/view1.html'
      })
      .when('/view2',
      {
        controller: 'SimpleController',
        templateUrl: 'partials/view2.html'
      })
      .otherwise({ redirectTo: '/' });
  });


    myApp.controller('SimpleController', function($scope){

      $scope.family = [
     {name: 'Alex Ung', profession: 'Software Engineer at Accenture'},
     {name: 'Derrick Ung', profession: 'Economic Analyst at the County of Riverside'},
      {name: 'Nareth Ung', profession: 'Network Engineer at Sempra Energies'},
      {name: 'Vann Heng', profession: 'Materials Science Engineer at Boeing'}
      ];

      $scope.addFamilyMember = function(){
        $scope.family.push({
          name: $scope.newFamilyMember.name,
          profession: $scope.newFamilyMember.profession
        });
      };

    });

    // 2) or could define function SimpleController above
    // and could pass myApp.controller('SimpleController', SimpleController)

    // 3) or could define var controllers = {};
    // controllers.SimpleController = function($scope){
     //   $scope.family = [
     // {name: 'Alex Ung', profession: 'Software Engineer at Accenture'},
     // {name: 'Derrick Ung', profession: 'Economic Analyst at the County of Riverside'},
     //  {name: 'Nareth Ung', profession: 'Network Engineer at Sempra Energies'},
     //  {name: 'Vann Heng', profession: 'Materials Science Engineer at Boeing'}
     //  ];
    // };
    // demoApp.controller(controllers);
