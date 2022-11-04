import List from "@mui/material/List";
import NestableListItem from "./NestableListItem";

const UserOrders = (props) => {
  return (
    <>
      <List>
        {props.orders.map((order, index) => (
          <NestableListItem key={index} name={index + 1} items={order.items} />
        ))}
      </List>
    </>
  );
};

export default UserOrders;
