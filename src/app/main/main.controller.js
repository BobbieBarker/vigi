'use strict';

class MainCtrl {
  constructor ($scope, vigi) {
    console.log(vigi)

    vigi.setBaseUrl('http://jsonplaceholder.typicode.com');
    let status = vigi;
    status.one('posts').get().then(data => {
      console.log(data);
      //need to change the way the object works
      /*data[0].remove().then(function(data){
        console.log('steve')
      })*/
    });

    let testy = vigi
    testy.one('posts', 2).get().then(data => {
      console.log(data);
      data.remove().then(function(resp){
        console.log('steve')
      })
    });

    let blah = vigi
    blah.one('posts', 3).remove();

    blah.one('posts').post({body: 'super testy', title: 'greatest ever'}).then(data => {
      console.log(data)
    });

    blah.one('posts', 1).update({body: 'updated', title: 'blah'}).then(data => {
      console.log(data)
    })
  }
}

MainCtrl.$inject = ['$scope', 'vigi'];

export default MainCtrl;
