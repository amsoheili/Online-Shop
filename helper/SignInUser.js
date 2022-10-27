import axios from "axios";
import { Dispatch } from "react";

import getUserData from "./getUserData";
import { userActions } from "../store/user";
import { useSession, signIn, singOut } from "next-auth/react";

const SignInUser = async (dispatch, user) => {
  // getting the user info
  // change the user states in store of redux
  // load user cart , load user orders

  // signIn("github");

  const userData = await getUserData(user.username);

  console.log(userData);

  dispatch(userActions.setUsername({ username: userData.username }));
  dispatch(userActions.setPassword({ password: userData.password }));
  dispatch(userActions.toggleIsLoggedIn());
  dispatch(userActions.setCart({ cartItems: userData.cartItems }));

  // console.warn(`signed in`);
};

export default SignInUser;
