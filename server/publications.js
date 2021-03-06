Meteor.publish('products', function() {
  return Products.find();
});

Meteor.publish('records', function() {
  return Records.find();
});

Meteor.publishComposite('boards', function() {
  return {
    find: function() {
      return Boards.find();
    },
    children: [
      {
        find: function(board) {
          return Meteor.users.find();
        }
      },
      {
        find: function(board) {
          return Products.find({});
        }
      },
    ]
  };
});

Meteor.publish('productsSearch', function(query) {
  check(query, String);

  if (_.isEmpty(query)) {
    return this.ready();
  }

  return Products.search(query);
});

Meteor.publishComposite('product', function(_id) {
  return {
    find: function() {
      return Products.find({_id: _id});
    },
    children: [
      {
        find: function(product) {
          return Meteor.users.find({_id: product.userId});
        }
      },
      {
        find: function(product) {
          return Records.find({productId: _id});
        }
      },
      {
        find: function(product) {
          return Boards.find({});
        }
      },
      {
        find: function(product) {
          return Meteor.users.find({_id: product.voterIds});
        }
      },
      {
        find: function(product) {
          return Comments.find({productId: product._id});
        },
        children: [
          {
            find: function(comment) {
              return Meteor.users.find({_id: comment.userId});
            }
          }
        ]
      }
    ]
  };
});

Meteor.publishComposite('user', function(_id) {
  return {
    find: function() {
      return Meteor.users.find({_id: _id});
    },
    children: [
      {
        find: function(user) {
          //return Products.find({_id: {$in: user.profile.votedProductIds}});
          return Products.find();
        }
      },
      {
        find: function(user) {
          //return Products.find({_id: {$in: user.profile.votedProductIds}});
          return Comments.find();
        }
      },
      {
        find: function(user) {

          return Records.find({userId: user._id});
        }
      },
    ]
  };
});

Meteor.publishComposite('record', function(_id) {
  return {
    find: function() {

      return Records.find();
    },
    children: [
      {
        find: function(record) {


          return Comments.find();
        }
      }
  ]
    
  };
});
