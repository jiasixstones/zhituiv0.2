
AccountsTemplates.configure({
  negativeValidation: false,
  negativeFeedback: false,
  positiveValidation: false,
  positiveFeedback: false,

});

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/login',
  redirect: '/'
});

  /*
    AccountsTemplates.configureRoute('signIn', {
        name: 'signin',
        path: '/',
        redirect: '/trending',
    });
    AccountsTemplates.configureRoute('signUp', {
        name: 'signUp',
        path: '/',
        redirect: '/trending',
    });
    var pwd = AccountsTemplates.removeField('password');
    AccountsTemplates.removeField('email');
    AccountsTemplates.addFields([
      {
          _id: "username",
          type: "text",
          displayName: "姓名",
          required: true,
          minLength: 2,
      },

      {
          _id: 'email',
          type: 'email',
          required: true,
          displayName: "邮箱",
          re: /.+@(.+){2,}\.(.+){2,}/,
          errStr: 'Invalid email',
      },

      {
        _id: 'phone',
        type: 'tel',
        displayName: "电话",
        required: true,
        minLength: 11,
        errStr: 'Invalid Phone number!',
      },

      {
        _id: 'password',
        type: 'password',
        displayName: "密码",
        required: true,
        minLength: 6,
      },

      {
          _id: 'username_and_email',
          type: 'text',
          required: true,
          displayName: "用户登录",
      },

    ]);
    */
    var pwd = AccountsTemplates.removeField('password');
    AccountsTemplates.removeField('email');
    AccountsTemplates.addFields([
      {
          _id: "username",
          type: "text",
          displayName: "姓名",
          required: true,
          minLength: 2,
      },

      {
          _id: 'email',
          type: 'email',
          required: true,
          displayName: "邮箱",
          re: /.+@(.+){2,}\.(.+){2,}/,
          errStr: 'Invalid email',
      },

      {
        _id: 'phone',
        type: 'tel',
        displayName: "电话",
        errStr: 'Invalid Phone number!',
      },

      {
        _id: 'password',
        type: 'password',
        displayName: "密码",
        required: true,
        minLength: 6,
      },

      {
          _id: 'username_and_email',
          type: 'text',
          required: true,
          displayName: "用户登录",
      },

    ]);
