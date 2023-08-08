import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Menu } from "antd";
import React from "react";
import styles from "../../../styles/index.scss";

const Layout = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems([
      { label: "Home", key: "HOME" },
      { label: "Input Component", key: "INPUT" },
      // { label: "Select Component", key: "SELECT" },
    ]);
  }, []);
  const handleMenuClick = (e) => {
    switch (e.key) {
      case "HOME":
        navigate("/");
        break;
      case "INPUT":
        navigate("/inputComponent");
        break;
      case "SELECT":
        navigate("/selectComponent");
        break;
      default:
        navigate("/");
        break;
    }
  };

  return (
    <div>
      <div className={styles.layout}>
        <div>
          <Menu
            defaultSelectedKeys={["HOME"]}
            mode="vertical"
            theme="light"
            onClick={handleMenuClick}
            items={menuItems}
          />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
