import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signOut } from "next-auth/react";

import classes from "./Layout.module.css";
import logoutUser from "../../helper/logoutUser";
import { useState } from "react";
import { useRouter } from "next/router";

const Layout = (props) => {
  const user = {
    isUserLoggedIn: useSelector((state) => state.user.isLoggedIn),
    username: useSelector((state) => state.user.username),
    cartItems: useSelector((state) => state.user.cartItems),
  };
  const [isAdmin, setIsAdmin] = useState(false);
  const { data: session, status } = useSession();

  const dispatch = useDispatch();

  const router = useRouter();

  const logoutHandler = () => {
    //console.log(`s`);
    logoutUser(dispatch, user.username);
    router.push("/login");
  };

  const enterProfileHandler = () => {
    router.push(`/profile/${user.username}`);
  };

  return (
    <>
      <div className={classes.layout}>
        <div className={classes.shopping}>
          <div>
            <Link href="/cart">
              <button className={"second-button   " + classes.basket}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{user.cartItems.length}</span>
              </button>
            </Link>
          </div>
          {!user.isUserLoggedIn && (
            <div>
              <Link href="/sign-up">
                <button className={"second-button " + classes.entering}>
                  <div>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div>Login | Sign Up</div>
                </button>
              </Link>
            </div>
          )}
          {user.isUserLoggedIn && (
            <div className={classes.loggedIn}>
              <div>
                <button
                  className={"second-button " + classes.entering}
                  onClick={logoutHandler}
                >
                  <div>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </div>
                  <div>Log out</div>
                </button>
              </div>
              <div>
                <button
                  className={"second-button " + classes.entering}
                  onClick={enterProfileHandler}
                >
                  My Profile
                </button>
              </div>
            </div>
          )}
        </div>
        <nav className={classes.navbar}>
          <ul>
            <div className={classes.title}>
              <Link href="/">Online Shop</Link>
            </div>
            <div className={classes.links}>
              <li>
                <Link href="/products">Products</Link>
              </li>
              {user.username == "admin" && (
                <li>
                  <Link href="/adding-product">Add New Product</Link>
                </li>
              )}
            </div>
          </ul>
        </nav>
      </div>
      <div className={classes.children}>{props.children}</div>
    </>
  );
};

export default Layout;
