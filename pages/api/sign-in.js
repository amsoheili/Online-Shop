import MongoClient from "mongodb";
import { DATABASE_URI } from "../../constants/database";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const user = req.body;

    const uri = DATABASE_URI;

    const client = await MongoClient.connect(uri);

    const db = client.db();

    const usersCollection = db.collection("users");

    usersCollection.updateOne();
  }
};

export default handler;
