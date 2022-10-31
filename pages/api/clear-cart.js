import MongoClient from "mongodb";

const handle = async (req, res) => {
  if (req.method == "POST") {
    const data = req.body;
    console.log(`here ${data.username}`);
    // const uri =
    //   "mongodb+srv://soheili:soheili@cluster0.gvxtnwo.mongodb.net/online-shop?retryWrites=true&w=majority";

    const uri = "mongodb://127.0.0.1:27017/online-shop";

    const client = await MongoClient.connect(uri);

    const db = client.db();

    const usersCollection = db.collection("users");

    const result = await usersCollection.updateOne(
      { username: data.username },
      { $set: { cartItems: [] } }
    );

    //console.log(result);

    client.close();

    res.status(201).json({ message: "Data inserted" });
  }
};

export default handle;
