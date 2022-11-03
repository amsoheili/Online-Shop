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
      { $pull: { cartItems: { id: data.item.id } } }
    );
  }
};

export default handler;
