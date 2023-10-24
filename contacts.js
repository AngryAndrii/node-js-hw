const fs = require("fs").promises;
const path = require("path");

const go = () => {
  console.log("ofofo");
};

module.exports = {
  go,
};

const contactsPath = path.basename("/db/contacts.json", ".json");

function listContacts() {}
