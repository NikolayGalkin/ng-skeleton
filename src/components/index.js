import ng from 'angular';

import Header from './header';
import Menu from './menu';
import Heroes from './heroes';
import Villains from './villains';

export default ng.module('app.components', [Header, Menu, Heroes, Villains]).name;
