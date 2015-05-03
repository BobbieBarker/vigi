'use strict';
import {Injector} from './di/src/index';
import {Vigi} from './vigi';
import {BaseUrl} from './base-url-config';
import {Rest} from './rest-service';
import {RequestProvider} from './request-provider';

 const vigi = () => {
   let injector = new Injector([
     Vigi,
     BaseUrl,
     Rest,
     RequestProvider
     ]);

   let vigi = injector.get(Vigi);
   return {
     Vigi: vigi
   }
};



var moduleName = 'vigi';
angular.module(moduleName, []).factory('vigi', vigi);
export default moduleName;
