import classes from "./Profile.module.css";
import Avatar from "@material-ui/core/Avatar";
import UserOrders from "./temp/UserOrders";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@mui/material";

const Profile = (props) => {
  return (
    <Card className={classes.card}>
      <div className={classes.main}>
        <div className={classes[`profile-image`]}>
          <Avatar className={classes.avatar}>
            {props.userData.username[0]}
          </Avatar>
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
