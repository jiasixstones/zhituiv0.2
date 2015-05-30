Template._upVoteButton.events({
  'click': function (event, template) {
    event.preventDefault();
    //console.log(this);
    var commentId = template.data._id;
    console.log();
    //console.log(commentId);
    if (!Meteor.user()) {
      IonModal.open('signIn');
      return;
    }

    Meteor.call('Comments.vote', commentId);
  }
});
