import MongoClient from "mongodb";
import { DATABASE_URI } from "../../../constants/database";
import Cart from "../../../components/Cart/Cart";

const CartPage = (props) => {
  return (
    <>
      <Cart cartItems={props.cartItems} />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(DATABASE_URI);

  const db = client.db();

  const usersCollection = db.collection("users");

  const users = await usersCollection.find({}, { username: 1 }).toArray();

  return {
    fallback: false,
    paths: users.map((user) => ({
      params: { username: user.username.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const username = context.params.username;

  const client = await MongoClient.connect(DATABASE_URI);

  const db = client.db();

  const usersCollection = db.collection("users");

  const selectedUser = await usersCollection.findOne({
    username: username,
  });

  client.close();

  return {
    props: {
      cartItems: selectedUser.cartItems,
    },
  };
}

export default CartPage;
