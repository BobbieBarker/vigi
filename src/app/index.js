'use strict';

import MainCtrl from './main/main.controller';
import {default as vigiModule} from './vigi/index';

angular.module('vigiPrototype', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ui.router',
  'ngMaterial',
  vigiModule
  ])
  .controller('MainCtrl', MainCtrl)


  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
