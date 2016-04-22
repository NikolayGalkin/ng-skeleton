import './menu.less';

import ng from 'angular';

import MenuComponent from './components';

export default ng.module('app.components.menu', [])
  .directive('menu', MenuComponent)
  .name;
