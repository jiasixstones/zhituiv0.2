Meteor.methods({
  'Products.vote': function (_id) {
    if (!Meteor.user()) {
      return;
    }

    if (_(Meteor.user().profile.votedProductIds).include(_id)) {
      return;
    }

    Products.update({_id: _id}, {$inc: {numberOfVotes: 1}, $addToSet: {voterIds: this.userId}});
    Meteor.users.update({_id: this.userId}, {$addToSet: {'profile.votedProductIds': _id}});
  },

  'Products.comment': function (_id) {
    if (!Meteor.user()) {
      return;
    }

    Products.update({_id: _id}, {$inc: {numberOfComments: 1}});
  },

  'Comments.vote': function (_id) {
    if (!Meteor.user()) {
      return;
    }

    Comments.update({_id: _id}, {$inc: {numberOfupVotes: 1}});
  },

  'Boards.update': function (_id, productId, votes) {
    if (!Meteor.user()) {
      return;
    }

    Boards.update({
        _id: _id,
        quizzes: { $elemMatch: { productId: productId}}
      }, 
      {$set: { "quizzes.$.votes": votes } }
    );
    
  }


});
