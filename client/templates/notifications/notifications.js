Template.notifications.rendered = function () {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    IonModal.open('signIn');
  }
  else
    IonModal.close();
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
  GetUser: function (userId) {
    return Meteor.users.findOne(userId);
  },
  GetUserName: function (userId) {
    return Meteor.users.findOne(userId).username;
  },
  GetProductName: function (productId) {
    return Products.findOne(productId).name;
  },
  products: function () {
    return Products.find({}, {sort: {name: 1}});
  },
  GetProductTagline: function (productId) {
    return Products.findOne(productId).tagline;
  },
  GetVotesFromQuizzes: function (quizzes, productId) {
    var votes = "_";

    console.log(quizzes);
    console.log(productId);

    _.each(quizzes, function(q) {
      console.log( q.productId, ' vs ', productId);
      if (q.productId == productId)
      {
        console.log('q.votes returned');
        console.log(q.votes);
        votes = q.votes;
      }
    });
    return votes;
  },
  users: function () {
    //console.log('subs users data coming here');
    // console.log(Meteor.users.find());
    return Meteor.users.find();
  },
  boards: function () {
    //return Boards.find({});
    //, {sort: { "quizzes.productId": -1}});
    // return Boards.find({'quizzes.productId': 'HcFs8aKZiATxWktKN'}, { sort : {'quizzes.votes': -1}});
    //var pId = 'HcFs8aKZiATxWktKN';
    var pId = Session.get('sortBy');
    var boards = Boards.find().fetch();
    console.log('-----');
    console.log(boards);
    console.log('****');
    //return boards.sort(function(a, b){return a.userId.localeCompare(b.userId)});

    return boards.sort( function(a, b) {
      // body...
      var p1, p2;
      console.log(a.quizzes);
      for (i = 0; i < a.quizzes.length; i++)
      {
          p1 = a.quizzes[i];
          console.log('p1', p1);
          if (p1.productId == pId)
          {
            for (j = 0; j < b.quizzes.length; j++)
            {
              p2 = b.quizzes[j];
              if  (p2.productId == pId)
              {
                console.log(p1.votes, 'vs', p2.votes);
                return -(p1.votes - p2.votes);
              }
            }
          }
      }
      return 1;
    })
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
