import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";
const ProductCard = ({ data }) => {
  return (
    <div className={styles.productParent}>
      <div
        className={styles.thumbnailWrapper}
        style={
          data?.availabilityStatus === "Out of Stock" ? { opacity: 0.5 } : {}
        }
      >
        <Image
          src={data?.thumbnail}
          height={100}
          width={100}
          alt={data.title}
          className={styles.thumbnail}
          loading="lazy"
        />
        {data?.availabilityStatus !== "In Stock" && (
          <div
            className={styles.availabilityOverlay}
            style={
              data?.availabilityStatus === "Out of Stock"
                ? { width: "200px" }
                : {}
            }
          >
            {data.availabilityStatus}
          </div>
        )}
      </div>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.description}></div>
    </div>
  );
};

export default ProductCard;
