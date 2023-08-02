import React, { useState } from "react";
import { Button } from "antd";
import styles from "../../../styles/index.scss";

const PageC = (props) => {
  const { shared } = props;
  const [different, setDifferent] = useState();

  const handleClick = () => {
    const temp = new Date().getTime();
    setDifferent(temp);
    shared.setShared({
      different: temp,
    });
  };

  return (
    <div>
      <div className={styles.title}>数据共享 跨子应用（不同技术栈）</div>
      <div>{different}</div>
      <Button onClick={handleClick}>设置共享数据</Button>
    </div>
  );
};

export default PageC;
