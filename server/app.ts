const { response } = require("express");
import express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.MONGODB_URI;
import mongoose = require("mongoose");
var path = require("path");

mongoose
  .connect(
    "mongodb+srv://hunkim98:hunkim98@cluster0.xzyh7.mongodb.net/firstDatabase?retryWrites=true&w=majority",
    {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.log(error));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var apiRouter = require("./routes/api");
var itemsRouter = require("./routes/items");
var icePackRouter = require("./routes/icePack");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../client/build")));

app.use("/users", usersRouter);
app.use("/api", apiRouter);
app.use("/items", itemsRouter);
app.use("/icePack", icePackRouter);

//this should be at the last line of the file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
