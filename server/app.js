const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.MONGODB_URI;
const mongoose = require("mongoose");
var path = require("path");

mongoose
  .connect(
    "mongodb+srv://hunkim98:hunkim98@cluster0.xzyh7.mongodb.net/firstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.log(error));

const updateSchema = new mongoose.Schema(
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

const readSchema = new mongoose.Schema(
  //this is for just reading the data on the server
  {
    animalType: Number,
    sceneType: Number,
    choice: Array,
    timestamp: Date,
  },
  { collection: "zerowaste" } //adds data to the same collection but saved with objectId
);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var apiRouter = require("./routes/api");
var itemsRouter = require("./routes/items");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../client/build")));

app.use("/users", usersRouter);
app.use("/api", apiRouter);
app.use("/items", itemsRouter);

//this should be at the last line of the file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
