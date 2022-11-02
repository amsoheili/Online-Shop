import getUserData from "./getUserData";

const isUsernameUsed = async (username) => {
  //console.log(username);

  const userData = await getUserData(username);

  // console.log(
  //   `${userData.username} and ${typeof userData.username !== "undefined"}`
  // );
  // console.log(userData);
  return typeof userData.username !== "undefined";
};

export default isUsernameUsed;
