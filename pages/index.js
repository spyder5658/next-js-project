import Head from "next/head";

import styles from "@/styles/Home.module.css";
import Navbar from "./comps/Navbar";
import Footer from "./comps/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HOmePage</h1>
      <p className={styles.title}>THis is the home page</p>
      <Link href="/another" className={styles.btn}>
        See all the lists
      </Link>
    </div>
  );
}
