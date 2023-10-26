const contacts = require("./contacts");

const invokeAction = async ({ action, id }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "add":
      contacts.addContact(name, email, phone);
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "e6ywwRe4jcqxXfCZOj_1e" });
invokeAction({
  action: "add",
  name: "Frog",
  email: "froggy@mail.com",
  phone: "1231233",
});
