import Head from "next/head";
//import Link from "next/link";
import InstagramAuth from "GradePrediction/components/InstagramAuth";

import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram Authentication</title> {/* Update the title */}
        <meta name="description" content="Instagram Authentication Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Instagram Authentication</h1>
          <div className={styles.cardRow}>
            <InstagramAuth /> {/* Render the InstagramAuth component */}
          </div>
        </div>
      </main>
    </>
  );
}