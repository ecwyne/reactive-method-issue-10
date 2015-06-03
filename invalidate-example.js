if (Meteor.isClient) {
  Template.hello.helpers({
    records: function (){
      return ['a', 'b', 'c', 'd', 'e'];
    },
    reactiveRecord: function (){
      return ReactiveMethod.call('someMethod', this.toString());
    },
    computations: function (){
      return JSON.stringify(ReactiveMethod._computations, null, 2);
    }
  });

  Template.hello.events({
    'click button': function (){
      console.log('before', ReactiveMethod._computations["[\"someMethod\",[\"a\"]]"]);
      ReactiveMethod.invalidateCall('someMethod', 'a');
      console.log('after', ReactiveMethod._computations["[\"someMethod\",[\"a\"]]"]);
      setTimeout(function (){
        console.log('after-recompute', ReactiveMethod._computations["[\"someMethod\",[\"a\"]]"]);
      }, 3000);
    }
  });
}

if (Meteor.isServer) {
  var count = 0;
  Meteor.methods({
    someMethod: function (val){
      count++
      return val + count;
    }
  });
}
