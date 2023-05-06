const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 8080;
const { readdirSync } = require("fs");

readdirSync("./routes").map((file) =>
  app.use("/", require("./routes/" + file))
);

app.get("/", (req, res) => {
  res.send("./users, ./products, ./cart");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
