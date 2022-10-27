import SignUp from "../../components/SignUp";
import { signUpUser } from "../../helper/signUpUser";
import isUsernameUsed from "../../helper/isUsernameUsed";

const SingUpPage = (props) => {
  return (
    <>
      <SignUp onAddUser={signUpUser} onIsUsernameUsed={isUsernameUsed} />
    </>
  );
};

export default SingUpPage;
