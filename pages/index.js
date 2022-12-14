import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online Shop</title>
        <meta name="description" content="A Perfect Online Shop" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome To Online Shop</h1>
        <h4>
          Admin info:
          <br /> username: admin
          <br /> password: admin
        </h4>
      </main>
    </div>
  );
}
