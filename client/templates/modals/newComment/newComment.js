AutoForm.hooks({
  'comments-new-form': {
    onSuccess: function (operation, result, template) {
      Meteor.call('Products.comment', Router.current().params._id);

      var boardId = Boards.findOne({userId: Meteor.userId()})._id;

      Boards.update({_id: boardId}, 
        {
          $push:
          { 
             "quizzes" : 
                { "productId": Router.current().params._id, "votes" : 0 },
          }
        }   
      );

      IonModal.close();
      IonKeyboard.close();
      //Router.go('products.show', {_id: result});
    }
  }
});
