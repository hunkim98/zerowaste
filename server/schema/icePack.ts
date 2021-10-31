import mongoose = require("mongoose");
export const updateIcePackSchema = new mongoose.Schema(
  //this is for writing data on the server
  {
    _id: mongoose.Schema.Types.ObjectId,
    totalGather: Number,
    totalRecycle: Number,
    createdAt: Date,
  },
  { collection: "zerowaste" }
);

export const changeIcePackModel = mongoose.model(
  "IcePack",
  updateIcePackSchema
);

export const readIcePackSchema = new mongoose.Schema(
  //this is for just reading the data on the server
  {
    totalGather: Number,
    totalRecycle: Number,
    createdAt: Date,
  },
  { collection: "zerowaste" } //adds data to the same collection but saved with objectId
);
