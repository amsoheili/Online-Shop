import Link from "next/link";

import classes from "./SignUp.module.css";
import useInput from "../hooks/use-input";
import { useEffect } from "react";
import { useState } from "react";
import isUsernameUsed from "../helper/isUsernameUsed";

const SignUp = (props) => {
  const [isUsernameRepeated, setIsUsernameRepeated] = useState(false);

  const {
    value: enteredUsername,
    hasError: usernameInputHasError,
    isValid: enteredUsernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsernameHandler,
  } = useInput((value) => value.trim() !== "");

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      const result = await isUsernameUsed(enteredUsername);
      console.log(result);
      setIsUsernameRepeated(result);
    }, 100);
    return () => {
      clearTimeout(timeOut);
    };
  }, [enteredUsername]);

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    isValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredRepeatedPassword,
    hasError: repeatedPasswordInputHasError,
    isValid: enteredRepeatedPasswordIsValid,
    valueChangeHandler: repeatedPasswordChangeHandler,
    inputBlurHandler: repeatedPasswordBlurHandler,
    reset: resetRepeatedPasswordHandler,
  } = useInput((value) => value.trim() === enteredPassword);

  let formIsValid = false;
  if (
    enteredUsernameIsValid &&
    enteredPasswordIsValid &&
    enteredRepeatedPasswordIsValid
  ) {
    formIsValid = true;
  }

  const resetValues = () => {
    resetUsernameHandler();
    resetPasswordHandler();
    resetRepeatedPasswordHandler();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid && !isUsernameRepeated) {
      return;
    }

    const newUser = {
      username: enteredUsername,
      password: enteredPassword,
    };

    props.onAddUser(newUser);

    resetValues();
  };

  return (
    <div className={classes["sign-up"]}>
      <div className={classes["form-container"]}>
        <h1>SIGN UP</h1>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.username}>
            {/* <label htmlFor="username">Username</label> */}
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={enteredUsername}
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
            />
            <div className={classes.hasError}>
              {usernameInputHasError && "Enter a valid username \n"}
              {isUsernameRepeated && "Username is choosed"}
            </div>
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            <div className={classes.hasError}>
              {passwordInputHasError && "Enter a valid password"}
            </div>
          </div>
          <div>
            {/* <label htmlFor="repeat-passwor">Repeat Password</label> */}
            <input
              name="repeat-password"
              type="password"
              placeholder="Repeat Password"
              value={enteredRepeatedPassword}
              onChange={repeatedPasswordChangeHandler}
              onBlur={repeatedPasswordBlurHandler}
            />
            <div className={classes.hasError}>
              {repeatedPasswordInputHasError &&
                "Entered passwords are not the same"}
            </div>
          </div>
          <div className={classes.submit}>
            <button type="submit">Confirm</button>
          </div>
          <div className={classes.login}>
            <h3>Have An Account?</h3>
            <Link href="/login">
              <button>Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
