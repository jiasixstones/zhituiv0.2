AutoForm.hooks({
  'comments-new-form': {
    onSuccess: function (operation, result, template) {
      Meteor.call('Products.comment', Router.current().params._id);
      IonModal.close();
      IonKeyboard.close();
      //Router.go('products.show', {_id: result});
    }
  }
});
