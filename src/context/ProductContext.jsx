"use client";

import { createContext, useState, useEffect, useContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [metadata, setMetadata] = useState({
    products: [],
    totalItems: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => response.json())
      .then((data) => {
        const requiredData = data?.products?.map((product) => {
          return {
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            availabilityStatus: product.availabilityStatus,
          };
        });

        setMetadata({
          products: requiredData,
          totalItems: data?.total,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ metadata, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
