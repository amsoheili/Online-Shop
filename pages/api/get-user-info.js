import MongoClient from "mongodb/lib/mongo_client";

const handler = async (req, res) => {
  //console.log(req.method);

  if (req.method === "POST") {
    const username = req.body.username;

    //console.log(username);

    // const uri =
    //   "mongodb+srv://soheili:soheili@cluster0.gvxtnwo.mongodb.net/online-shop?retryWrites=true&w=majority";

    const uri = "mongodb://127.0.0.1:27017/online-shop";

    const client = await MongoClient.connect(uri);

    const db = client.db();

    const usersCollection = db.collection("users");

    const users = await usersCollection.find().toArray();

    const [user, ...other] = users.filter((user) => user.username === username);

    //console.log(`The user info is`);

    // console.log(user?.username);

    // console.log(user);

    res.status(201).json(user);
  }
};

export default handler;
