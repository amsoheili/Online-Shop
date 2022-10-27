import Login from "../../components/Login";

import isUsernameUsed from "../../helper/isUsernameUsed";

const LoginPage = () => {
  return (
    <>
      <Login onIsUsernameUsed={isUsernameUsed} />
    </>
  );
};

export default LoginPage;
