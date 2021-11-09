import mongoose = require("mongoose");
export const updateUserSchema = new mongoose.Schema(
  //this is for writing data on the server
  {
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    animalType: Number,
    animalIndex: Number,
    choice: Array,
    createdAt: Date,
  },
  { collection: "zerowaste" }
);

export const updateUserModel = mongoose.model("UpdateUser", updateUserSchema);

export const readUserSchema = new mongoose.Schema(
  //this is for just reading the data on the server
  {
    username: String,
    animalType: Number,
    animalIndex: Number,
    createdAt: Date,
  },
  { collection: "zerowaste" } //adds data to the same collection but saved with objectId
);

export const readUserModel = mongoose.model("ReadUser", readUserSchema);
