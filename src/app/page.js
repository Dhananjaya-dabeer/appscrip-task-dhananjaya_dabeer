import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import PageLinks from "@/components/PageLinks";
import Discover from "@/components/Discover";
import ProductProviderClient from "@/context/ProductProviderClient";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <PageLinks />
      <Discover />
      <ProductProviderClient />
    </div>
  );
}
