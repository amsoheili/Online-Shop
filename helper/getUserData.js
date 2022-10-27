import axios from "axios";

const getUserData = async (username) => {
  const response = await axios.post("/api/get-user-info", {
    username: username,
  });

  //console.log(response.data?.username);

  const user = {
    username: response.data?.username,
    password: response.data?.password,
    cartItems: response.data?.cartItems,
    orders: response.data?.orders,
  };

  return user;
};

export default getUserData;
