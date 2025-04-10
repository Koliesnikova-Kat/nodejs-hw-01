import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const songList = await readContacts();
  const newContact = createFakeContact();
  writeContacts([...songList, newContact]);
};

addOneContact();
