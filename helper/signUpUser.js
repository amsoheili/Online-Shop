import axios from "axios";

export const signUpUser = async (user) => {
  axios.post("/api/new-user", user);
  //console.log(response.data);
};
