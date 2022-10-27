import getUserData from "./getUserData";

const isUsernameUsed = async (username) => {
  //console.log(username);

  const userData = await getUserData(username);

  //console.log(`${userData.username} and ${userData !== ""}`);

  return userData !== "";
};

export default isUsernameUsed;
