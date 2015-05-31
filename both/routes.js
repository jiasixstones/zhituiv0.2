Router.route('/', {
  name: 'notifications'
});

Router.route('/recent', {
  name: 'recent'
});

Router.route('/products/:_id', {
  name: 'products.show'
});

Router.route('/users/:_id', {
  name: 'users.show'
});

Router.route('/trending', {
  name: 'trending'
});

Router.route('/profile', {
  name: 'profile'
});

Router.route('/resume',
  {name:'resume'});
