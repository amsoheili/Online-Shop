import Profile from "../../../components/Profile";
import MongoClient from "mongodb";

const ProfilePage = (props) => {
  console.log(props.userData.orders);
  return (
    <>
      <Profile userData={props.userData} />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb://127.0.0.1:27017/online-shop"
  );

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

  const client = await MongoClient.connect(
    "mongodb://127.0.0.1:27017/online-shop"
  );

  const db = client.db();

  const usersCollection = db.collection("users");

  const selectedUser = await usersCollection.findOne({
    username: username,
  });

  client.close();

  return {
    props: {
      userData: {
        id: selectedUser._id.toString(),
        username: selectedUser.username,
        password: selectedUser.password,
        cartItems: selectedUser.cartItems,
        orders: selectedUser.orders,
      },
    },
  };
}

export default ProfilePage;
