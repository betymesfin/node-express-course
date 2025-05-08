const express = require("express");
const router = express.Router();

const {
  getAllProductStatic,
  getAllProduct,
} = require("../controllers/products");

router.route("/").get(getAllProduct);
router.route("/static").get(getAllProductStatic);

module.exports = router;
