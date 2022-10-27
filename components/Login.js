import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import classes from "./Login.module.css";
import useInput from "../hooks/use-input";
import SignInUser from "../helper/SignInUser";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const Login = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [isUsernameRepeated, setIsUsernameRepeated] = useState(false);

  const {
    value: enteredUsername,
    hasError: usernameInputHasError,
    isValid: enteredUsernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsernameHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    isValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordHandler,
  } = useInput((value) => value.trim() !== "");

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      const result = await props.onIsUsernameUsed(enteredUsername);
      console.log(result);
      setIsUsernameRepeated(result);
    }, 100);
    return () => {
      clearTimeout(timeOut);
    };
  }, [enteredUsername]);

  let formIsValid = false;
  if (enteredUsernameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const resetValues = () => {
    resetUsernameHandler();
    resetPasswordHandler();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid && isUsernameRepeated) {
      return;
    }
    console.log(enteredUsername);
    SignInUser(dispatch, {
      username: enteredUsername,
      password: enteredPassword,
    });

    // SignInUser(dispatch, username);
    resetValues();

    router.push(`/products`);
  };

  return (
    <div className={classes.login}>
      <div className={classes["form-container"]}>
        <h1>Login</h1>
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
              {!isUsernameRepeated && "There are no such username"}
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
          <div className={classes.submit}>
            <button type="submit">Confirm</button>
          </div>
          <div className={classes["sign-up"]}>
            <h3>Do Not Have An Account?</h3>
            <Link href="/sign-up">
              <button>Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
