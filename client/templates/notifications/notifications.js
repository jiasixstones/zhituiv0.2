Template.notifications.rendered = function () {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    IonModal.open('signIn');
  }
};
Template.notifications.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('record');
  }.bind(this));
};
Template.notifications.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('user');
  }.bind(this));
};
Template.notifications.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('product');
  }.bind(this));
};
Template.notifications.helpers({


  comments: function () {

    return Comments.find();
  },
  recodes: function () {

    return Records.find();
  }
//  users: function () {

  //  return Users.find();
//  }

});
