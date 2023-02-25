var router = require("express").Router();

/* HOME */
router.get("/", require("../controllers/"));

/* Products Test */
router.use("/contacts", require("./contacts"));

module.exports = router;
