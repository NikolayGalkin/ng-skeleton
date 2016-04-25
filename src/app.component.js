import template from './app.html';

export default {
  template,
  $routeConfig: [
    {path: '/heroes', name: 'Heroes', component: 'heroes', useAsDefault: true},
    {path: '/villains', name: 'Villains', component: 'villains'}
  ]
};
