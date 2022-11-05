// ./pages/index.js

import Head from "next/head";
import styles from "../styles/Home.module.css";
import SiteLayout from "../layouts/SiteLayout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Site</title>
        <meta name="description" content="This is my Next.js site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <header className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="font-extrabold text-7xl">Welcome to my site</h1>
          <p className="text-2xl">I&apos;m glad you&apos;re here</p>
        </header>
      </section>
    </div>
  );
}

// define layout for home page
Home.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};
