import MongoClient from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const user = req.body;

    const uri = "mongodb://127.0.0.1:27017/online-shop";

    const client = await MongoClient.connect(uri);

    const db = client.db();

    const usersCollection = db.collection("users");

    usersCollection.updateOne();
  }
};

export default handler;
