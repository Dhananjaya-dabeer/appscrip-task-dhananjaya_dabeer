import React from "react";
import styles from "./PageLinks.module.css";
function PageLinks() {
  return (
    <div className={styles.parent}>
      <div className={styles.pagePath}>
        <p className={styles.home}>HOME | </p>
        <p className={styles.shop}>SHOP</p>
      </div>
    </div>
  );
}

export default PageLinks;
