/* HANDLES /products route */
var router = require("express").Router();

router.get("/", require("../../controllers/products"));

module.exports = router;
