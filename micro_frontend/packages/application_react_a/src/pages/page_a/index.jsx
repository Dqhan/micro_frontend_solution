import React, { useEffect, useState } from "react";
import { Button } from "antd";
import styles from '../../../styles/index.scss'

const PageA = (props) => {
  const { shared } = props;
  const { shareCount } = shared.getShared('react-app-a')
  const [count, setCount] = useState(shareCount || 0);

  useEffect(() => {
    shared.onSharedChange((state) => { 
      const { shareCount } = state['react-app-a'];
      setCount(shareCount);
    });
  }, []);

  const handleClick = () => {
    shared.setShared({
      shareCount: count + 1,
    });
  };

  return (
    <div>
      <div className={styles.title}>数据共享 子应用独立展示</div>
      <div>共享数据Count: {count}</div>
      <Button onClick={handleClick}>设置共享数据Count</Button>
    </div>
  );
};

export default PageA;
