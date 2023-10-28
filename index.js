const contacts = require("./contacts");
const { program } = require("commander");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
    default:
      console.log("unknown action");
      break;
  }
};

// invokeAction({
//   action: "add",
//   name: "Bobby boo",
//   email: "forel@mail.com",
//   phone: "55525225",
// });

// invokeAction({ action: "remove", id: "ppp" });

// invokeAction({ action: "list" });
program
  .option("-a, --action <action>", "action to invoke")
  .option("-i --id <id>", "contact id")
  .option("-n --name <name>", "contact name")
  .option("-e --email <email>", "contact email")
  .option("-p --phone <phone>", "contact phone");

program.parse(process.argv);
const options = program.opts();

invokeAction(options);
