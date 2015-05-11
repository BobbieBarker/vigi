'use strict';
import {Interceptor} from './interceptor';

export class RequestProvider {

  create(input, Init){
    return new Request(input, Init)
  }

   _fetch(request){
    return new Promise((resolve, reject) => {
       window.fetch(request).then((data) => data.json().then((rest) => {
         resolve(rest);
       }));
     });
   }
}
