Template._upVoteButton.events({
  'click': function (event, template) {
    event.preventDefault();

    if (!Meteor.user()) {
      IonModal.open('signIn');
      return;
    }

    Meteor.call('Comments.vote', Router.current().params._id);
    //Meteor.call('Products.comment', Router.current().params._id);
  }
});
