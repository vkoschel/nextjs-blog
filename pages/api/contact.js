import { MongoClient } from "mongodb";

import { USER, PASS } from "../../config";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = JSON.parse(req.body);

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${USER}:${PASS}@cluster0.abpur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: "connection to db failed" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "failed to save message" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "successfully stored message!", message: newMessage });
  }
}

export default handler;
