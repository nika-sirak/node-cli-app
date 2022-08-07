const { Command } = require("commander");
const contactsOperations = require("./contacts");

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const data = await contactsOperations.listContacts();
      console.table(data);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);
      console.table(contact);
      break;

    case "add":
      const newContacts = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.table(newContacts);
      break;

    case "remove":
      const contacts = await contactsOperations.removeContact(id);
      console.table(contacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

invokeAction(argv);
