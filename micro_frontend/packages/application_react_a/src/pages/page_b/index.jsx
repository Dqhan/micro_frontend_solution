import React, { useState } from "react";
import { Button } from "antd";
import styles from "../../../styles/index.scss";

const PageB = (props) => {
  const { shared } = props;
  const [same, setSame] = useState();

  const handleClick = () => {
    const temp = new Date().getTime();
    setSame(temp);
    shared.setShared({
      same: temp,
    });
  };

  return (
    <div>
      <div className={styles.title}>数据共享 跨子应用（相同技术栈）</div>
      <div>{same}</div>
      <Button onClick={handleClick}>设置共享数据</Button>
    </div>
  );
};

export default PageB;
