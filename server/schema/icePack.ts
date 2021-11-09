import mongoose = require("mongoose");
export const updateIcePackSchema = new mongoose.Schema(
  //this is for writing data on the server
  {
    _id: mongoose.Schema.Types.ObjectId,
    totalGather: Number,
    totalRecycle: Number,
    createdAt: Date,
  },
  { collection: "icepack" }
);

export const changeIcePackModel = mongoose.model(
  "UpdateIcePack",
  updateIcePackSchema
);

export const readIcePackSchema = new mongoose.Schema(
  //this is for just reading the data on the server
  {
    totalGather: Number,
    totalRecycle: Number,
    createdAt: Date,
  },
  { collection: "icepack" } //adds data to the same collection but saved with objectId
);

export const readIcePackModel = mongoose.model(
  "ReadIcePack",
  readIcePackSchema
);
