import AccessError from "../../../components/AccessError";
import Profile from "../../../components/Profile";
import MongoClient from "mongodb";
import { useSelector } from "react-redux";
import { useState } from "react";
import { DATABASE_URI } from "../../../constants/database";

const ProfilePage = (props) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return isLoggedIn ? (
    <>
      <Profile userData={props.userData} />
    </>
  ) : (
    <AccessError message="Please Login To Your Account First" />
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
