import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Menu, Select } from "antd";
import type { MenuProps } from "antd";
import React from "react";
import less from "less";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

type MenuItem = Required<MenuProps>["items"][number];
interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = (props) => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const dispatch = useDispatch();

  const {
    theme: { primaryTheme },
  } = useSelector((state: RootState) => {
    return state;
  });

  useEffect(() => {
    setMenuItems([
      { label: "Management", key: "MANAGEMENT" },
      { label: "React Application A", key: "REACT_A" },
      { label: "React Application B", key: "REACT_B" },
      { label: "Vue Application", key: "VUE" },
      { label: "Components Application", key: "COMPONENTS" },
    ]);
  }, []);
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "MANAGEMENT":
        navigate("/management");
        break;
      case "REACT_A":
        navigate("/react-app-a");
        break;
      case "REACT_B":
        navigate("/react-app-b");
        break;
      case "VUE":
        navigate("/vue-app");
        break;
      case "COMPONENTS":
        navigate("/components");
        break;
      default:
        navigate("/");
        break;
    }
  };

  const handleChangeTheme = (value: string) => {
    dispatch({
      type: "theme/setTheme",
      payload: value,
    });
  };

  useEffect(() => {
    let bgTheme;
    let menuTheme;
    let fontTheme;
    if (primaryTheme === "NORMAL") {
      bgTheme = "#ddd";
      menuTheme = "#ddd";
      fontTheme = "#000000";
    }
    if (primaryTheme === "DARK") {
      bgTheme = "#000";
      menuTheme = "#000";
      fontTheme = "#eeeeee";
    }
    if (primaryTheme === "LIGHT") {
      bgTheme = "#fff";
      menuTheme = "#fff";
      fontTheme = "#000000";
    }
    less
      .modifyVars({
        "@primary-color": bgTheme,
        "@menu-color": menuTheme,
        "@menu-font-color": fontTheme,
      })
      .then(() => {
        console.log("修改成功");
      });
  }, [primaryTheme]);

  return (
    <div>
      <div>
        <div className="absolute top-1.5 ml-1.5 menu-bg-color">
          切换主题
          <Select
            defaultValue={["NORMAL"]}
            value={[primaryTheme]}
            options={[
              { label: "Normal", value: "NORMAL" },
              { label: "Dark", value: "DARK" },
              { label: "Light", value: "LIGHT" },
            ]}
            className="ml-1.5"
            onChange={handleChangeTheme}
          />
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="horizontal"
          theme="light"
          onClick={handleMenuClick}
          items={menuItems}
          className="justify-around bg-gray-300 menu-bg-color"
        />
      </div>
      <div className="flex flex-row">
        <div className="w-52 bg-gray-300 min-h-screen menu-bg-color"></div>
        <div className="flex-grow text-center justify-items-center mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
