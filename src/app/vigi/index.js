'use strict';
import {Vigi} from './vigi';
import {BaseUrl} from './base-url-config';
import {Rest} from './rest-service';

 const vigi = () => {
   let baseUrl = new BaseUrl();
   let rest = new Rest();
   return new Vigi(baseUrl, rest);
};



var moduleName = 'vigi';
angular.module(moduleName, []).factory('vigi', vigi);
export default moduleName;
