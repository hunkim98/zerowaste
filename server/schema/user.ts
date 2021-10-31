import mongoose = require("mongoose");
export const updateUserSchema = new mongoose.Schema(
  //this is for writing data on the server
  {
    _id: mongoose.Schema.Types.ObjectId,
    animalType: Number,
    sceneType: Number,
    choice: Array,
    timestamp: Date,
  },
  { collection: "zerowaste" }
);

export const readUserSchema = new mongoose.Schema(
  //this is for just reading the data on the server
  {
    animalType: Number,
    sceneType: Number,
    choice: Array,
    timestamp: Date,
  },
  { collection: "zerowaste" } //adds data to the same collection but saved with objectId
);
