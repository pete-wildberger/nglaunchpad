console.log('js');
var myApp = angular.module( 'myApp', []);

///add controller to myApp
myApp.controller('angularintro', function(){
console.log('NG');
var vm = this;

vm.testClick = function(){
  console.log('hey you clicked on something');
};

});


// after creating module and controller they must be connected to html.
// do this with ng-app and ng-controller
