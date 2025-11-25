import express from "express";
import knex from "../database.js";

const router = express.Router();

// Example POST endpoint to add a new contact
router.post("/", async (request, response) => {
  try {
    console.log(response.body); // Server side log, for developers
    const insertedContact = await knex("contacts").insert(response.body); // This could be insecure!
    response.status(201).json(insertedContact); // 201 Created
  } catch (error) {
    console.error("Error inserting contact:", error); // Server side error, for developers
    response
      .status(500)
      .json({ message: "Something went wrong on the server." }); // Client side error, for users. Avoid leaking database info.
  }
});

export default router;
