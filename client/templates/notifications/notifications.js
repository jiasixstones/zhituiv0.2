Template.notifications.rendered = function () {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    IonModal.open('signIn');
  }
};

/*
Template.notifications.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('record');
  }.bind(this));
};

Template.notifications.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('product');
  }.bind(this));
};

Template.notifications.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('products');
  }.bind(this));
};
*/

Template.notifications.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('boards');
  }.bind(this));
};


Template.notifications.helpers({
  GetUserName: function (userId) {
    return Meteor.users.findOne(userId).username;
  },
  GetProductName: function (productId) {
    return Products.findOne(productId).name;
  },
  users: function () {
    //console.log('subs users data coming here');
    // console.log(Meteor.users.find());
    return Meteor.users.find();
  },
  boards: function () {
    return Boards.find({});
  },
  getQuizzes: function () {
    console.log(this.quizzes);

    var s = this.quizzes.sort(function(a,b) {
        var name1 = Products.findOne(a.productId).name;
        var name2 = Products.findOne(b.productId).name;
    
        return name1.localeCompare(name2);
      }
    );
    console.log(s);
    return s;
  },
});
