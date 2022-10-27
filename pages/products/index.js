import Head from "next/head";
import { MongoClient } from "mongodb";

import ProductsList from "../../components/products/ProductsList";

let items = [
  { name: "p1", price: "20", description: "d1" },
  { name: "p2", price: "30", description: "d2" },
  { name: "p3", price: "40", description: "d3" },
  { name: "p4", price: "50", description: "d4" },
  { name: "p5", price: "60", description: "d4" },
  { name: "p6", price: "70", description: "d4" },
  { name: "p7", price: "80", description: "d4" },
];

const ProductsPage = (props) => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="The list of products to buy" />
      </Head>
      <ProductsList products={props.products} />
    </>
  );
};

export async function getStaticProps() {
  // const uri =
  //   "mongodb+srv://soheili:soheili@cluster0.gvxtnwo.mongodb.net/online-shop?retryWrites=true&w=majority";

  const uri = "mongodb://127.0.0.1:27017/online-shop";

  const client = await MongoClient.connect(uri);

  const db = client.db();

  const productsCollection = db.collection("products");

  const products = await productsCollection.find().toArray();

  console.log(products);
  client.close();

  console.log(`products fetched`);

  return {
    props: {
      products: products.map((product) => ({
        name: product.name,
        price: product.price,
        description: product.description,
        id: product._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default ProductsPage;
