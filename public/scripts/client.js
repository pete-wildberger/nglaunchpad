console.log('js');
var myApp = angular.module('myApp', []);

///add controller to myApp
myApp.controller('angularintro', function() {
  console.log('NG');
  var vm = this;
  vm.showFront = false;
  vm.cars = [];

  vm.addCar = function() {
    console.log('in addCar');

    var newCar = {
      year: vm.yearIn,
      make: vm.makeIn,
      model: vm.modelIn,
      cost: vm.costIn
    };
    vm.cars.push(newCar);
    console.log(vm.cars);

  };




//
// vm.testClick = function() {
//
//   if (vm.userInput === '' || vm.userInput === undefined) {
//     vm.output = '';
//   } else {
//     vm.output = ('you typed:' + vm.userInput);
//     console.log('you typed:', vm.userInput);
//   }
//
//   vm.userInput = '';
// };

//
// vm.toggleShow = function() {
//     vm.showFront = !vm.showFront;
//   };

});

// after creating module and controller they must be connected to html.
// do this with ng-app and ng-controller
