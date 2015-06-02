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

    var userId = Meteor.userId();
    var productId = Router.current().params._id;
    var commentId = template.data._id;

    Records.insert(
    {
        userId: userId,
        productId: productId,
        commentId: commentId,
    });

    var whoAnswerId = Comments.findOne(commentId).userId;
    var number = Comments.findOne(commentId).numberOfupVotes;

    // update Boards
    console.log('who andswer ', whoAnswerId);
    var boards = Boards.find({userId: whoAnswerId}).fetch();
    console.log(boards);
    var boardId = boards[0]._id;

    var votes = number + 1;

    Meteor.call('Boards.update', boardId, productId, votes);

    Meteor.call('Comments.vote', commentId);
  }
});
