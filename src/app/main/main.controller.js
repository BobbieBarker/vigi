'use strict';

class MainCtrl {
  constructor ($scope, vigi) {

    vigi.Vigi.setBaseUrl('http://jsonplaceholder.typicode.com');
    let status = vigi.Vigi;
    status.one('posts').get().then(data => {
      console.log(data)
    });

    let testy = vigi.Vigi
    testy.one('posts', 2).get().then(data => {
      console.log(data)
    })

    let blah = vigi.Vigi;
    blah.one('posts', 3).remove()
  }
}

MainCtrl.$inject = ['$scope', 'vigi'];

export default MainCtrl;
