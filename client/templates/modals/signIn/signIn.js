Players = new Mongo.Collection("Players");
AccountsTemplates.configure({
  negativeValidation: false,
  negativeFeedback: false,
  positiveValidation: false,
  positiveFeedback: false,
});
/*
Template.signIn.events({
  'click [data-action=sign-in]': function (event, template) {
    Meteor.loginWithMeteor
    DeveloperAccount({}, function (error) {
      if (error) {
        alert(error);
      } else {
        IonModal.close();
      }
    });
  }
});
*/
//AccountsTemplates.configureRoute('signIn', {
    //name: 'signin',
    //path: '/login',
    //template: 'myLogin',
    //layoutTemplate: 'myLayout',
    //redirect: '/recent',});
