import mongoose = require("mongoose");
import express = require("express");
import { readUserModel, updateUserModel } from "../schema/user";
var router = express.Router();

interface requestDTO {
  username: String;
  createdAt: Date;
  animalType: Number;
  animalIndex: Number;
  choice: Array<Number>;
}

interface sendToMongoose extends requestDTO {
  _id: mongoose.Types.ObjectId;
}

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const data = await readUserModel.findOne({ _id: req.query.id });
  const othersData = await readUserModel
    .find({
      createdAt: { $lt: data.createdAt },
      //less than
      _id: { $ne: req.query.id },
      //not equal to current user's
    })
    .sort({ _id: -1 })
    .limit(Number(req.query.limit));

  res.json({ status: "success", data, othersData });
  // .then((data) => res.json({ status: "success", data: data }));
});

router.post("/", async function (req: { body: requestDTO }, res, next) {
  const mongooseId = new mongoose.Types.ObjectId();
  const data: sendToMongoose = { _id: mongooseId, ...req.body };
  const toMongoose = new updateUserModel(data);
  toMongoose
    .save(res.json({ status: "success", data: mongooseId }))
    .catch((err: any) => {
      console.log("Error : " + err);
    });
});

module.exports = router;
