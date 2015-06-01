Template._upVoteButton.events({
  'click': function (event, template) {
    event.preventDefault();
    //console.log(this);
    var commentId = template.data._id;

    //console.log(commentId);
    if (!Meteor.user()) {
      IonModal.open('signIn');
      return;
    }

Records.insert(
{
    userId: Meteor.userId(),
    productId: Router.current().params._id,
    commentId: template.data._id
});

    Meteor.call('Comments.vote', commentId);
}
});
