
Meteor.startup(function() {
  /*
  ServiceConfiguration.configurations.remove({service: 'meteor-developer'});
  ServiceConfiguration.configurations.insert({
    service: 'meteor-developer',
    clientId: Meteor.settings.meteorDeveloper.clientId,
    secret: Meteor.settings.meteorDeveloper.secret
  });
  */
});

Accounts.onCreateUser(function(options, user) {
  //user.emails = user.services['meteor-developer'].emails;
  //user.profile = options.profile;
  //user.profile.votedProductIds = [];
  console.log(user);
  Boards.insert({userId: user._id, quizzes: []});
  return user;
});
