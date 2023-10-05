import Head from "next/head";
import InstagramSuccess from "../components/InstagramSuccess";
import styles from "./index.module.css"; // If you want to reuse the same styles

export default function InstagramSuccessPage() {
  return (
    <>
      <Head>
        <title>Instagram Success</title>
        <meta name="description" content="Instagram Authentication Successful" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Instagram Authentication Successful</h1>
          <div className={styles.cardRow}>
            <InstagramSuccess />
          </div>
        </div>
      </main>
    </>
  );
}
