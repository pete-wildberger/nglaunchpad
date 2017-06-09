console.log('js');
var myApp = angular.module( 'myApp', []);

///add controller to myApp
myApp.controller('angularintro', function(){
console.log('NG');
var vm = this;

vm.testClick = function(){

  if(vm.userInput === '' || vm.userInput === undefined) {
    vm.output = '';

  } else {
  vm.output = ('you typed:' +  vm.userInput);
  console.log('you typed:', vm.userInput);
}
vm.userInput = '';
};

});


// after creating module and controller they must be connected to html.
// do this with ng-app and ng-controller
