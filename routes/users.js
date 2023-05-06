const express = require("express");
const router = express.Router();

const userData = [
  {
    id: 1,
    email: "john@gmail.com",
    username: "john",
  },
  {
    id: 2,
    email: "smith@gmail.com",
    username: "smith",
  },
  {
    id: 3,
    email: "jessica@gmail.com",
    username: "jessica",
  },
];

router.get("/users", (req, res) => {
  res.send("userData");
});

module.exports = router;
