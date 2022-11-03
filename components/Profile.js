import { useState } from "react";

import classes from "./Profile.module.css";

import Avatar from "@material-ui/core/Avatar";
import UserOrders from "./temp/UserOrders";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@mui/material";
import axios from "axios";

const Profile = (props) => {
  // const [selectedImage, setSelectedImage] = useState();

  // const handleClick = () => {
  //   console.log(selectedImage);
  //   const fd = new FormData();

  //   fd.append("myfile", selectedImage);
  //   console.log(fd.forEach(i =>));
  //   axios.post("/api/add-profile-image", {
  //     username: "admin",
  //     image: fd,
  //   });
  //   console.log(selectedImage);
  // };

  // const imageChangeHandler = (e) => {
  //   setSelectedImage(e.target.files[0]);
  // };
  return (
    <Card className={classes.card}>
      <div className={classes.main}>
        <div className={classes[`profile-image`]}>
          <Avatar className={classes.avatar}>
            {props.userData.username[0]}
            {/* {selectedImage && (
              <div>
                <img
                  alt="not fount"
                  width={"250px"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
              </div>
            )} */}
          </Avatar>
          {/* <button onClick={handleClick}>add image</button>
          <input type="file" name="myImage" onChange={imageChangeHandler} />
          <button onClick={() => setSelectedImage(null)}>Remove</button> */}
        </div>
        <div className={classes[`user-info`]}>
          <div className={classes.username}>
            <div>Username: </div>
            <div>{props.userData.username}</div>
          </div>
          <div className={classes.password}>
            <div>Password: </div>
            <div>{props.userData.password}</div>
          </div>

          <div>
            <h4>
              My Orders <FontAwesomeIcon icon={faCartArrowDown} />
            </h4>
            <UserOrders orders={props.userData.orders} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
