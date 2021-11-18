import mongoose = require("mongoose");
import express = require("express");
import { readUserModel, updateUserModel } from "../schema/user";
var router = express.Router();

interface requesetDTO {
  createdAt: Date;
  animalType: Number;
  animalIndex: Number;
  choice: Array<Number>;
}

interface sendToMongoose extends requesetDTO {
  _id: mongoose.Types.ObjectId;
}

/* GET users listing. */
router.get("/", function (req, res, next) {
  readUserModel
    .findOne({ _id: req.query.id })
    .then((data) => res.json({ status: "success", data: data }));
});

router.post("/", function (req: { body: requesetDTO }, res, next) {
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
