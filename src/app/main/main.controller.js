'use strict';

class MainCtrl {
  constructor ($scope, vigi) {
    console.log(vigi);

    vigi.Vigi.setBaseUrl('http://jsonplaceholder.typicode.com');
    let status = vigi.Vigi.one('posts');
    console.log(status)
  }
}

MainCtrl.$inject = ['$scope', 'vigi'];

export default MainCtrl;
