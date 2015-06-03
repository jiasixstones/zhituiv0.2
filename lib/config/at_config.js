var onSubmitHook = function(error, state){
  if (!error) {
    if (state === "signIn") {
      // Successfully logged in
      IonModal.close();
      console.log("Successfully logged in");
    }
    if (state === "signUp") {
      // Successfully registered
      IonModal.close();
      console.log("Successfully registered");
    }
  }
};

AccountsTemplates.configure({
    // Hooks
    onSubmitHook: onSubmitHook
});
