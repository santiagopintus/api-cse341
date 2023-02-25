var router = require("express").Router();

/* HOME */
router.get("/", require("../controllers/"));

/* Products Test */
router.use("/products", require("./products"));

module.exports = router;
