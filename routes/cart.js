const express = require("express");
const router = express.Router();

const cartData = [
  {
    id: 1,
    userId: 1,
    date: "2023-04-30",
    products: [{ productId: 1, quantity: 4 }],
  },
  {
    id: 2,
    userId: 2,
    date: "2023-04-21",
    products: [{ productId: 1, quantity: 1 }],
  },
  {
    id: 3,
    userId: 3,
    date: "2023-04-28",
    products: [{ productId: 1, quantity: 2 }],
  },
];

router.get("/cart", (req, res) => {
  res.send("cartData");
});

module.exports = router;
