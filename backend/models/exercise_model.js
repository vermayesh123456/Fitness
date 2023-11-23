const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    description:{ type : String , required : true},
    duration:{ type: Number , required: true},
    sets: { type: Number , required: false },
    reps: {type: Number , required: false},
    date: { type: Date , required: true}
  } , {
    timestamps: true, // tells when it was created and when it was modified
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
