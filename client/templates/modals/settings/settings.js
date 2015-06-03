Template.settings.events({
  'click [data-action=sign-out]': function (event, template) {
    Meteor.logout(function () {
      IonModal.close();
      Router.go('/');
    });
  }
});

Template.settings.events({
  'click [data-action=sign-in]': function (event, template) {
    /*
    Meteor.loginWithMeteor
    DeveloperAccount({}, function (error) {
      if (error) {
        alert(error);
      } else {
        IonModal.close();
      }
    });
  }
  */
    IonModal.close();
  }
});

