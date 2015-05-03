'use strict';

export class RequestProvider {
  constructor(){

  }

  create(input, ...Init){
    return new Request(input, Init)
  }
}
