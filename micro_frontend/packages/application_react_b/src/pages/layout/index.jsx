import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Menu } from "antd";
import React from "react";
import styles from "../../../styles/index.scss";
const Layout = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems([
      {
        label: "Home",
        key: "HOME",
      },
      { label: "Module 1", key: "MODULE_A" },
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
      default:
        navigate("/");
        break;
    }
  };

  return (
    <div className={styles.layout}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["HOME"]}
        onClick={handleMenuClick}
        theme="light"
        items={menuItems}
      />
      <div className={styles.center}>{children}</div>
    </div>
  );
};

export default Layout;
