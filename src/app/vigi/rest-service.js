'use strict';
import {Inject, Provide} from './di/src/index';
import {RequestProvider} from './request-provider';


export class Rest {
  constructor(@Inject(RequestProvider) requestProvider: RequestProvider) {

    Rest.request = requestProvider;
    console.log(requestProvider)
  }

  get(){
   let request = Rest.request.create(this.path, {method: 'GET'});
   return new Promise((resolve, reject) => {
     window.fetch(request).then((data) => data.json().then((rest) => {
       resolve(rest)
     }))
   })
  }

  post(){

  }

  remove(){

  }

  update(){

  }

  set url(path){
    this.path = path;
  }

}
