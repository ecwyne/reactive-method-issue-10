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
      delete ReactiveMethod._computations["[\"someMethod\",[\"a\"]]"][0]._reactiveMethodData["[\"someMethod\",[\"a\"]]"]
      ReactiveMethod._computations["[\"someMethod\",[\"a\"]]"][0]._compute();
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
