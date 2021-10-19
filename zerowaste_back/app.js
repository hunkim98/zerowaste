const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var path = require("path");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var apiRouter = require("./routes/api");
var itemsRouter = require("./routes/items");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../zerowaste_client/build")));

// app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);
app.use("/items", itemsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../zerowaste_client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
