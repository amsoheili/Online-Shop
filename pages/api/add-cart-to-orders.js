import { uuidV4 } from "mongodb/lib/core/utils";
import MongoClient from "mongodb/lib/mongo_client";
import { DATABASE_URI } from "../../constants/database";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // const uri =
    //   "mongodb+srv://soheili:soheili@cluster0.gvxtnwo.mongodb.net/online-shop?retryWrites=true&w=majority";

    const uri = DATABASE_URI;

    const client = await MongoClient.connect(uri);

    const db = client.db();

    const usersCollection = db.collection("users");

    const users = await usersCollection.find().toArray();

    const result = await db
      .collection("users")
      .updateOne(
        { username: data.username },
        { $push: { orders: { items: data.cartItems } } }
      );

    // const orders = await usersCollection.find({ username: data.username });

    // const result = await orders.push({ items: data.cartItems });

    client.close();

    res.status(201).json({ message: "Data inserted" });
  }
};

export default handler;
