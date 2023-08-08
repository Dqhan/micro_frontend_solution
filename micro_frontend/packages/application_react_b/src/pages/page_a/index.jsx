import React from "react";
import styles from "../../../styles/index.scss";

const PageA = (props) => {
  const { shared } = props;
  const { same } = shared.getShared('react-app-a');
  return (
    <div>
      <div className={styles.title}>来自Application React A的数据</div>
      <div>{same}</div>
    </div>
  );
};

export default PageA;
