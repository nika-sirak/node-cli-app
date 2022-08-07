const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const result = await fs.readFile(contactsPath);
  const contacts = JSON.parse(result);
  const contact = contacts.find((item) => item.id === contactId);
  return contact;
};

const removeContact = async (contactId) => {
  const result = await fs.readFile(contactsPath);
  const contacts = JSON.parse(result);
  const newContacts = contacts.filter((item) => item.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return newContacts;
};

const addContact = async (name, email, phone) => {
  const newContanct = {
    id: uuidv4(),
    name,
    email,
    phone,
  };
  const result = await fs.readFile(contactsPath);
  const contacts = JSON.parse(result);
  contacts.push(newContanct);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContanct;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
