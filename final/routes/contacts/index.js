/* HANDLES /contacts route */
const router = require("express").Router();
const contacts = require("../../controllers/contacts");

router.get("/", (req, res) => {
  contacts.getContacts(req, res, null);
});
router.get("/:id", (req, res) => {
  contacts.getContacts(req, res, req.params.id);
});

/* ADD */
router.post("/", contacts.addContact);
/* UPDATE */
router.put("/:id", (req, res) => {
  contacts.updateContact(req, res);
});
/* DELETE */
router.delete("/:id", (req, res) => {
  contacts.deleteContact(req, res);
});

module.exports = router;
