Template._voteButton.events({
  'click': function (event, template) {
    event.preventDefault();

    if (!Meteor.user()) {
      IonModal.open('signIn');
      return;
    }

    Meteor.call('Products.vote', this._id);
  }
});

Template._voteButton.helpers({
  hasVotedClass: function () {
    if (!Meteor.user()) {
      return;
    }
    if(_(Meteor.user().profile.votedProductIds).contains(this._id)) {
      return 'has-voted';
    }
  }
});

Template.voters-comments.events({
  'click': function (event, template) {
    event.preventDefault();

    if (!Meteor.user()) {
      IonModal.open('signIn');
      return;
    }

    Meteor.call('Comments.vote', this._id);
  }
});
