"use client";
import { useProducts } from "@/context/ProductContext";
import styles from "./FilterAndRecomended.module.css";
import { useEffect, useState } from "react";
const FilterAndRecomended = ({ setIsFilterHedden, isFilterHidden }) => {
  const { metadata, isLoading } = useProducts();
  const handleClickFilter = () => {
    setIsFilterHedden((prev) => !prev);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.filterBar}>
        <div className={styles.totalItems_hidefilter}>
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <div className={styles.items}>
              <p>{metadata?.totalItems} ITEMS</p>
            </div>
          )}
          <div className={styles.hideFilter} onClick={handleClickFilter}>
            {isFilterHidden ? (
              <p>{">"} SHOW FILTER</p>
            ) : (
              <p> {"<"} HIDE FILTER</p>
            )}
          </div>
        </div>

        <div className={styles.filter} onClick={handleClickFilter}>
          <p>FILTER</p>
        </div>

        <div className={styles.recomended}>
          <select name="recomended" defaultValue={"Recomended"}>
            <option value="recomended">RECOMMENDED</option>
            <option value="recomended">Newest first</option>
            <option value="recomended">popular</option>
            <option value="recomended">Price : high to low</option>
            <option value="recomended">Price : low to high</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterAndRecomended;
