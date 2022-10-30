import { useSelector } from "react-redux";
import Profile from "../../components/Profile";

const ProfilePage = () => {
  return (
    <>
      <Profile />;
    </>
  );
};

export async function getStaticProps() {
  const username = useSelector((state) => state.user.username);

  const uri = "mongodb://127.0.0.1:27017/online-shop";

  const client = await MongoClient.connect(uri);

  const db = client.db();

  const usersCollection = db.collection("users");

  const orders = await usersCollection.find({ username: username }).toArray();

  const result = await usersCollection.updateOne(
    { username: data.username },
    { $push: { orders: data.cartItems } }
  );

  client.close();

  return {
    props: {
      orders: orders.map((order) => ({
        name: order.name,
        price: order.price,
        description: order.description,
        id: order._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default ProfilePage;
