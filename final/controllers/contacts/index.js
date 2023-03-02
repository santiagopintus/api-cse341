const db = require("../../db");
const Contact = require("../../models/contact.model");

/* Response to /contacts route */
const getContacts = async (_, res, id = null) => {
  try {
    let contacts;
    if (id) {
      contacts = await Contact.findOne({ _id: id });
    } else {
      contacts = await Contact.find();
    }
    if (contacts == null) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error getting contacts");
  }
};

const addContact = async (req, res) => {
  /* Checks for a valid req.body before reading it */
  if (!req.body) {
    console.log(req.body);
    res.status(400).json({ message: "Invalid request body" });
    return;
  }

  const { firstName, lastName, email, favoriteColor, birthday } = req.body;

  // Check if all fields are present
  if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Create a new contact document
  const newContact = new Contact({
    firstName,
    lastName,
    email,
    favoriteColor,
    birthday,
  });

  // Save the new contact document to the database
  try {
    // Save the new contact document to the database
    const savedContact = await newContact.save();
    // Return the new contact's ID in the response body
    return res.status(201).json({ id: savedContact._id });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/****** UPDATE ********/
const updateContact = async (req, res) => {
  // Check if ID parameter is present
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "ID parameter is required" });
  }

  // Check if at least one field is present in request body
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  if (!firstName && !lastName && !email && !favoriteColor && !birthday) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Update contact with new values
  const updatedContact = {
    firstName,
    lastName,
    email,
    favoriteColor,
    birthday,
  };

  try {
    const result = await Contact.findOneAndUpdate({ _id: id }, updatedContact, {
      new: true,
    });
    if (!result) {
      return res.status(404).json({ message: "Contact not found" });
    }
    /* If success */
    return res.status(204).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error updating contact");
  }
};

/* DELETE A CONTACT */
const deleteContact = async (req, res) => {
  const { id } = req.params;

  // Check if ID parameter is present
  if (!id) {
    return res.status(400).json({ message: "ID parameter is required" });
  }

  try {
    // Delete contact by ID
    const result = await Contact.findOneAndDelete({ _id: id });

    // Check if contact was found and deleted
    if (!result) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // Return 200
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error deleting contact");
  }
};

module.exports.getContacts = getContacts;
module.exports.addContact = addContact;
module.exports.updateContact = updateContact;
module.exports.deleteContact = deleteContact;
