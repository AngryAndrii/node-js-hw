const fs = require("node:fs").promises;
const path = require("node:path");
const crypto = require("node:crypto");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === contactId);
    if (!result) {
      return null;
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}

function writeContacts(contacts) {
  fs.writeFile(contactsPath, JSON.stringify(contacts, undefined, 2));
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  contacts.push({
    ...contacts,
    id: crypto.randomUUID,
    name: name,
    email: email,
    phone: phone,
  });
  writeContacts(contacts);
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
};
