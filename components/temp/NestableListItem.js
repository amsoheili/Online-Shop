import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useState } from "react";
import List from "@material-ui/core/List";
import classes from "./NestableListItem.module.css";

const NestableListItem = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={`order ${props.name}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          {props.items.map((item) => (
            <ListItem key={item._id}>
              <div className={classes.item}>
                <div>{item.name}</div>
                <div>
                  {item.quantity} * {item.price}
                </div>
              </div>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default NestableListItem;
