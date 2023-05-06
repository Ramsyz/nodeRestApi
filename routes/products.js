const express = require("express");
const router = express.Router();

const productData = [
  {
    _id: 1,
    title: "iphone14",
    description:
      " Apple iPhone 14 smartphone. Announced Sep 2022. Features 6.1″ display, Apple A15 Bionic chipset, 3279 mAh battery, 128 GB storage, 6 GB RAM, Ceramic Shield",
    price: "$799",
  },
  {
    _id: 2,
    title: "iphone14 Pro",
    description:
      " Apple iPhone 14 Pro smartphone. Announced Sep 2022. Features 6.1″ display, Apple A16 Bionic chipset, 3279 mAh battery, 128 GB storage, 6 GB RAM, Ceramic Shield",
    price: "$099",
  },
  {
    _id: 3,
    title: "iphone14 Pro Max",
    description:
      " Apple iPhone 14 Pro Max smartphone. Announced Sep 2022. Features 6.4″ display, Apple A16 Bionic chipset, 4323 mAh battery, 128 GB storage, 6 GB RAM, Ceramic Shield",
    price: "$999",
  },
];

router.get("/products", (req, res) => {
  res.send("productData");
});

module.exports = router;
