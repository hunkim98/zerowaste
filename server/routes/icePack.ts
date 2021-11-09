import mongoose = require("mongoose");
import express = require("express");
import {
  changeIcePackModel,
  readIcePackModel,
  readIcePackSchema,
} from "../schema/icePack";
var router = express.Router();

interface requesetDTO {
  createdAt: Date;
  totalGather: Number;
  totalRecycle: Number;
}

interface sendToMongoose {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  totalGather: Number;
  totalRecycle: Number;
}

router.get("/", function (req: any, res: any, next: any) {
  readIcePackModel
    .find()
    .sort({ createdAt: -1 })
    .limit(1)
    .then((data) => {
      res.json({ status: "success", data: data });
    });
});

router.post("/", function (req: { body: requesetDTO }, res: any, next: any) {
  const mongooseId = new mongoose.Types.ObjectId();
  const data: sendToMongoose = { _id: mongooseId, ...req.body };
  const toMongoose = new changeIcePackModel(data);
  toMongoose.save().catch((err: any) => {
    console.log("Error : " + err);
  });
  res.json({
    status: "success",
    id: mongooseId,
  });
});

module.exports = router;
