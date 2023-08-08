import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import React from "react";
import styles from "../../../styles/index.scss";

const Layout = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems([
      { label: "Home", key: "HOME" },
      { label: "Module A", key: "MODULE_A" },
      { label: "Module B", key: "MODULE_B" },
      { label: "Module C", key: "MODULE_C" },
      { label: "Module D", key: "MODULE_D" },
    ]);
  }, []);
  const handleMenuClick = (e) => {
    switch (e.key) {
      case "HOME":
        navigate("/");
        break;
      case "MODULE_A":
        navigate("/page_a");
        break;
      case "MODULE_B":
        navigate("/page_b");
        break;
      case "MODULE_C":
        navigate("/page_c");
        break;
      case "MODULE_D":
        navigate("/page_d");
        break;
      default:
        navigate("/");
        break;
    }
  };

  return (
    <div>
      <div>
        <div>
          <Menu
            defaultSelectedKeys={["HOME"]}
            mode="horizontal"
            theme="light"
            onClick={handleMenuClick}
            items={menuItems}
          />
        </div>
        <div className={styles.center}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
