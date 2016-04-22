export default class HeaderController {
  constructor($scope, $http, $log) {
    'ngInject';
    this.$scope = $scope;

  }

  $onInit() {
    this.item = 'Hello World';
    console.log(this.menu);
  }

  hey($event) {
    $event.preventDefault();
    console.log(this.item);
  }
}

// function HeaderClass($scope) {
//   this.$scope = $scope;
// }
//
// HeaderClass.prototype.$onInit = function() {
//   this.$scope.item = 'Hello World';
// }
//
// HeaderClass.prototype.hey = function($event) {
//   $event.preventDefault();
//   console.log(this.$scope.item);
// }
