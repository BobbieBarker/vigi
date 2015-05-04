'use strict';
import {Inject} from './di/src/index';
import {RequestProvider} from './request-provider';


export class Rest {
  constructor(@Inject(RequestProvider) requestProvider: RequestProvider) {

    Rest.request = requestProvider;
    console.log(requestProvider);
  }

  get(){
   let request = Rest.request.create(this.path, {method: 'GET'});
   console.log(request)
   return new Promise((resolve, reject) => {
     window.fetch(request).then((data) => data.json().then((rest) => {
       resolve(rest);
     }));
   });
  }

  post(){
    let request = Rest.request.create(this.path, {method: 'POST'});
    return new Promise((resolve, reject) => {
      window.fetch(request).then((data) => data.json().then((rest) => {
        resolve(rest);
      }));
    });
  }

  remove(){
    let request = Rest.request.create(this.path, {method: 'DELETE'});
    console.log(request)
    return new Promise((resolve, reject) => {
      window.fetch(request).then((data) => data.json().then((rest) => {
        resolve(rest);
      }));
    });
  }

  update(){

  }

  set url(path){
    console.log(path)
    this.path = path;
  }

}
