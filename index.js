const contactsOperations = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const data = await contactsOperations.listContacts();
      console.log(data);
      break;

    default:
      console.log("Unknow operation");
      break;
  }
};

invokeAction({ action: "read" });
