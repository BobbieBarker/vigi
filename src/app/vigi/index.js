'use strict';
import {Injector} from './di/src/index';
import {Vigi} from './vigi';
import {BaseUrl} from './base-url-config';

 const vigi = () => {
   let injector = new Injector([
     Vigi,
     BaseUrl
     ]);

   let vigi = injector.get(Vigi);
   console.log(injector);
   return {
     Vigi: vigi
   }
};



var moduleName = 'vigi';
angular.module(moduleName, []).factory('vigi', vigi);
export default moduleName;
