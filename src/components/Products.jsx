import { useProducts } from "@/context/ProductContext";
import React, { useEffect, useState, useRef, useCallback } from "react";
import ProductCard from "./ProductCard";
import styles from "./Products.module.css";

const Products = () => {
  const { metadata, isLoading } = useProducts();
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [page, setPage] = useState(1);
  const productsPerPage = 20;
  const observer = useRef();
  const isDataLoaded = metadata.products.length > 0;

  const lastProductRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          page * productsPerPage < metadata.products.length
        ) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, page, metadata.products.length]
  );

  useEffect(() => {
    if (isDataLoaded) {
      const newVisibleProducts = metadata.products.slice(
        0,
        page * productsPerPage
      );
      setVisibleProducts(newVisibleProducts);
    }
  }, [page, metadata.products, isDataLoaded]);

  return isDataLoaded ? (
    <div className={styles.productsCardParent}>
      {visibleProducts.map((item, index) => {
        if (visibleProducts.length === index + 1) {
          return (
            <div ref={lastProductRef} key={item.id}>
              <ProductCard data={item} />
            </div>
          );
        } else {
          return (
            <div key={item.id}>
              <ProductCard data={item} />
            </div>
          );
        }
      })}
      {isLoading && (
        <div className={styles.loader}>
          <div className={`loader`}></div>
        </div>
      )}
    </div>
  ) : (
    <div className={styles.loader}>
      <div className={`loader`}></div>
    </div>
  );
};

export default Products;
