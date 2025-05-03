"use client";

import { ProductProvider } from "@/context/ProductContext";
import FilterAndRecomended from "@/components/FilterAndRecomended";
import Filters from "@/components/FilterSidebar";
import { useState } from "react";
import Products from "@/components/Products";
import styles from "../components/ProductProviderClient.module.css";
import Footer from "@/components/Footer";

export default function ProductProviderClient() {
  const [isFilterHidden, setIsFilterHedden] = useState(true);
  return (
    <ProductProvider>
      <FilterAndRecomended
        setIsFilterHedden={setIsFilterHedden}
        isFilterHidden={isFilterHidden}
      />
      <div className={styles.filter_products_parent}>
        <Filters
          isFilterHidden={isFilterHidden}
          setIsFilterHedden={setIsFilterHedden}
        />
        <Products />
      </div>
      <Footer />
    </ProductProvider>
  );
}
