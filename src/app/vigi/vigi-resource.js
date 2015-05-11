'use strict';
import {RequestProvider} from './request-provider';

export class Resource extends RequestProvider{
  constructor(){
  }

  get(path){
    let request = super.create(path, {method: 'GET'});
    return super._fetch(request);
  }

  post(path, payload){
    let request = super.create(path, {method: 'POST', body: JSON.stringify(payload)});
    return super._fetch(request);
  }

  put(path, payload){
    let request = super.create(path, {method: 'PUT', body: JSON.stringify(payload)});
    return super._fetch(request);
  }

  remove(path){
    console.log(this.path)
    let request = super.create(this.path, {method: 'DELETE'});
    return super._fetch(request);
  }

}
