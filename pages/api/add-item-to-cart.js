import MongoClient from "mongodb";
import { DATABASE_URI } from "../../constants/database";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const data = req.body;

    // const uri =
    //   "mongodb+srv://soheili:soheili@cluster0.gvxtnwo.mongodb.net/online-shop?retryWrites=true&w=majority";

    const uri = DATABASE_URI;

    const client = await MongoClient.connect(uri);

    const db = client.db();

    const usersCollection = db.collection("users");

    const result = await usersCollection.updateOne(
      { username: data.username },
      { $push: { cartItems: data.item } }
    );

    //console.log(result);

    client.close();

    res.status(201).json({ message: "Data inserted" });
  }
};

export default handler;
