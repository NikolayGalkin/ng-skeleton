import ng from 'angular';

export default ng.module('app.components.villains', [])
  .component('villains', {
    template: '<h2>Villains</h2><ng-outlet></ng-outlet>'
  })
  .name;
