const mongoose = require("mongoose");

const { Schema } = mongoose;

const student = new Schema({
  name: {
    type: String,
    required: true,
  },
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "activity",
    },
  ],
  matters: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "matter",
      },
      qualification: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("student", student);
