import { openDB } from "idb";

// Initializes the IndexedDB database
const initdb = async () =>
  openDB("jate", 1, {
    // Upgrade callback function runs when database is created or version changes
    upgrade(db) {
      // Checks if 'jate' object store already exists, if not, creates it
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Adds or updates content in the database
export const putDb = async (content) => {
  // Opens a connection to the database
  const jateDb = await openDB("jate", 1);
  // Creates a transaction to write data
  const tx = jateDb.transaction("jate", "readwrite");
  // Accesses the object store
  const store = tx.objectStore("jate");
  // Puts the content into the database and overwrites if id exists
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log("Data saved to the database", result);
};

// Retrieves content from the database
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  // Creates a transaction to read data
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  // Gets the content from the database using id
  const request = store.get(1);
  const result = await request;
  // Returns the content if it exists
  return result?.value;
};

initdb();
