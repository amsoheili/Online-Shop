import AddingProduct from "../../components/products/AddingProduct";
import axios from "axios";
import { useSelector } from "react-redux";
//import { getSession } from "next-auth";
import AccessError from "../../components/AccessError";

const AddingProductPage = (props) => {
  const username = useSelector((state) => state.user.username);

  const addProductHandler = async (product) => {
    const response = await axios.post("/api/new-product", product);
    console.log(response.data);
  };

  return username == "admin" ? (
    <>
      <AddingProduct onAddProduct={addProductHandler} />
    </>
  ) : (
    <AccessError message="You don't have access to this page" />
  );
};

export default AddingProductPage;

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   return {
//     props: {
//       isLoggedIn: session,
//     },
//   };
// }
