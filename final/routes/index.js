var router = require("express").Router();

/* HOME */
router.get("/", require("../controllers/"));

/* Contacts */
router.use("/contacts", require("./contacts"));

/* API docs */
router.use("/api-docs", require("./api-docs"));

module.exports = router;
