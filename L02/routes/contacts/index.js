/* HANDLES /contacts route */
const router = require("express").Router();
const contacts = require("../../controllers/contacts");

router.get("/", (req, res) => {
  contacts.getContacts(req, res, null);
});
router.get("/:id", (req, res) => {
  contacts.getContacts(req, res, req.params.id);
});

module.exports = router;
