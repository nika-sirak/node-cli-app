const contactsOperations = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const data = await contactsOperations.listContacts();
      console.log(data);
      break;
    case "get":
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);
      break;
    case "remove":
      const newContacts = await contactsOperations.removeContact(id);
      console.log(newContacts);
      break;
    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

invokeAction({
  action: "add",
  name: "Mango Db",
  email: "mango@gmail.com",
  phone: "0958018728",
});
