import classes from "./AccessError.module.css";
const AccessError = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.message}>{props.message}</div>
    </div>
  );
};

export default AccessError;
