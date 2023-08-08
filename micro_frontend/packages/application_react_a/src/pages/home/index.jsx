import React from "react";
import styles from "../../../styles/index.scss";
const Home = () => {
  return (
    <div>
      <div className={styles.title}>样式隔离展示</div>
      <section>
        <div className={styles.home}></div>
      </section>
    </div>
  );
};

export default Home;
