'use strict';

class MainCtrl {
  constructor ($scope, vigi) {

    vigi.Vigi.setBaseUrl('http://jsonplaceholder.typicode.com');
    let status = vigi.Vigi.one('posts');
    status.get().then(data => {
      console.log(data)
    });

    let testy = vigi.Vigi.one('posts', 2);
    testy.get().then(data => {
      console.log(data)
    })
  }
}

MainCtrl.$inject = ['$scope', 'vigi'];

export default MainCtrl;
