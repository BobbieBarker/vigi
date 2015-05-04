'use strict';
import {Inject} from './di/src/index';
import {BaseUrl} from './base-url-config';
import {Rest} from './rest-service';

export class Vigi {
  constructor(
    @Inject(BaseUrl) baseUrl: BaseUrl,
    @Inject(Rest) rest: Rest
  ){
    Vigi.baseUrl = baseUrl;
    Vigi.rest = rest;
    console.log(rest)
  }

  setBaseUrl(url){
    Vigi.baseUrl = url;
  }

  one(route, id){
    let resource;
    if(_.isUndefined(id)){
       resource = `${Vigi.baseUrl}/${route}`;
    }else{
       resource = `${Vigi.baseUrl}/${route}/${id}`;
    }
     Vigi.rest.url = resource;
     return Vigi.rest;
  }
}
