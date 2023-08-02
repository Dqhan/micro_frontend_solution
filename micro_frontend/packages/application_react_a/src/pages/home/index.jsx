import React from "react";
import styles from "../../../styles/index.scss";
const Home = () => {
  return (
    <div>
      <div className={styles.title}>样式隔离展示</div>
      <pre>
        <p>React Application A: div class='home'</p>
        <p>构建后的样式: app_a_home_ZxII_</p>
        <p>React Application B: div class='home'</p>
        <p>构建后的样式: app_b_home_ZxII_</p>
      </pre>

      <section>
        <div className={styles.home}></div>
      </section>
    </div>
  );
};

export default Home;
