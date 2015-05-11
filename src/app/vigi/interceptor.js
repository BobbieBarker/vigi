'use strict';
import {Resource} from './vigi-resource';

export class Interceptor {

  resourcer(data){
    let resource = new Resource();
    resource.data = data;
    console.log(resource)
    return resource;
  }
}
