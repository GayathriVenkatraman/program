import knex from "knex";

// Run "sqlite3 phonebook.sqlite3 < phonebook.sql" to create this database first
const dbFile = "./phonebook.sqlite3";

const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
});

export default knexInstance;