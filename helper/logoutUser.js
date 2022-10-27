import axios from "axios";
import { userActions } from "../store/user";

const logoutUser = (dispatch, username) => {
  console.log(`something`);
  dispatch(userActions.logoutCompletely());
};

export default logoutUser;
