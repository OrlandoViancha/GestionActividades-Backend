const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const matter = new Schema({
  name: {
    type: String,
    required: true,
  },
  

  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: 'activity',
    },
  ],
});

module.exports = mongoose.model("matter", matter);
