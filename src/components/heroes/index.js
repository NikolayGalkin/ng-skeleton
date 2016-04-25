import ng from 'angular';

export default ng.module('app.components.heroes', [])
  .component('heroes', {
    template: '<h2>Heroes</h2><ng-outlet></ng-outlet>'
  })
  .name;
