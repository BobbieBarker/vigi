'use strict';
import {Inject, Provide} from './di/src/index';
import {BaseUrl} from './base-url-config';
import {Rest} from './rest-service';

export class Vigi {
  constructor(@Inject(BaseUrl) baseUrl: BaseUrl){
    Vigi.baseUrl = baseUrl;

  }

  setBaseUrl(url){
    Vigi.baseUrl = url;
  }

  one(route, id){
    let resource = `${Vigi.baseUrl}/${route}`;
    return new Rest(resource);
  }


}
