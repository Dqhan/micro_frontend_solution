import React from "react";
import { Input } from "antd";
import styles from  "./style.scss";

const InputComponent = () => {
  return (
    <div className={styles['input-component']}>
      <Input />
    </div>
  );
};

export default InputComponent;
