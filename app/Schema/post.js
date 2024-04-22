const mongoose = require('mongoose');
 

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    created_by: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  }
);


PostSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Post', PostSchema);
