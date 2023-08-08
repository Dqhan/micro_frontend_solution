import React from "react";
import styles from "../../../styles/index.scss";
import InputComponent from 'component_library/Input';


const PageD= () => {
  return (
    <div>
      <div className={styles.title}>组件应用引入组件</div>
      <InputComponent />
    </div>
  );
};

export default PageD;
