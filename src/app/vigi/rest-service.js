'use strict';
import {Resource} from './vigi-resource';

export class Rest extends Resource {

  get(){
    let resource = new Resource();
    resource.path = this.path;
    return new Promise((resolve, reject) => {
      super.get(this.path).then(data => {
        if(_.isArray(data)){
          data = data.map((item) => {
             return Object.assign(resource, item)
          });
          resolve(data);
        }else{
          resolve(Object.assign(resource, data));
        }

      })
    })
  }

  post(payload){
    return super.post(this.path, payload);
  }

  remove(){
    return super.remove(this.path);
  }

  update(payload){
    return super.put(this.path, payload);
  }

  set url(path){
    this.path = path;
  }

  get url(){
    return this.path
  }
}
