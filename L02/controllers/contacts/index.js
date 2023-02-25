/* Importing the DB */
const db = require("../../db");

/* Response to /contacts route */
const getContacts = async (_, res, id = null) => {
  try {
    const contacts = await db.getData("contacts", id);
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error getting contacts");
  }
};

module.exports.getContacts = getContacts;
