import MongoClient from "mongodb/lib/mongo_client";

const handler = async (req, res) => {
  //console.log(req.method);
  if (req.method === "POST") {
    const data = req.body;

    // const uri =
    //   "mongodb+srv://soheili:soheili@cluster0.gvxtnwo.mongodb.net/online-shop?retryWrites=true&w=majority";

    const uri = "mongodb://127.0.0.1:27017/online-shop";

    const client = await MongoClient.connect(uri);

    const db = client.db();

    const productsCollection = db.collection("products");

    const result = await productsCollection.insertOne(data);

    //console.log(result);

    client.close();

    res.status(201).json({ message: "Data inserted" });
  }
};

export default handler;
