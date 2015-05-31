Comments = new Mongo.Collection('comments');

Comments.helpers({

  datePosted: function () {
    return moment(this.createdAt).format('M月D日H:m:s');
  },

  author: function () {
    //return Meteor.users.findOne({_id: this.userId});
    return this.userId;
  }

});

Comments.attachSchema(new SimpleSchema({
  body: {
    type: String,
    autoform: {
      rows: 6,
      'label-type': 'placeholder',
      placeholder: '填写你的答案……'
    }
  },
  userId: {
    type: String,
    autoValue: function () {
      if (this.isInsert) {
        return Meteor.userId();
      } else {
        this.unset();
      }
    }
  },
  productId: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else {
        this.unset();
      }
    }
  },

  upvoterIds: {
    type: [String],
    optional: true,
    defaultValue: []
  },
  numberOfupVotes: {
    type: Number,
    optional: true,
    defaultValue: 0
  }

}));
