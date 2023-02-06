const mongoose = require("mongoose");

const actorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    about: {
      // description
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      trim: true,
      required: true,
    },
    avatar: {
      type: Object,
      url: String,
      public_id: String, // storage_id
    },
  },
  { timestamps: true }
);

actorSchema.index({ name: "text" });

module.exports = mongoose.model("Actor", actorSchema);
