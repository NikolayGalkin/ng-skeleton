import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import ng from 'angular';
import '@angular/router/angular1/angular_1_router';

import Components from './components';

import AppConfig from './app.config';
import AppComponent from './app.component';

ng.module('app', ['ngComponentRouter', Components])
  .value('$routerRootComponent', 'app')
  .component('app', AppComponent)
  .config(AppConfig)
