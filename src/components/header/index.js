import ng from 'angular';

import HeaderComponent from './components';

export default ng.module('app.components.header', [])
  .component('appHeader', HeaderComponent)
  .name;
