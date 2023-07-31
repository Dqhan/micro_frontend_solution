import { useEffect, useMemo, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Menu, Select, Dropdown, Space, Button } from "antd";
import type { MenuProps } from "antd";
import React from "react";
import less from "less";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import shared from "../../../utils";

type MenuItem = Required<MenuProps>["items"][number];
interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const dispatch = useDispatch();

  const {
    theme: { primaryTheme },
    shared,
  } = useSelector((state: RootState) => {
    return state;
  });

  const { token } = shared;
  console.log('token', token)

  useEffect(() => {
    setMenuItems([
      { label: "Management", key: "MANAGEMENT" },
      { label: "React Application A", key: "REACT_A" },
      { label: "React Application B", key: "REACT_B" },
      { label: "Vue Application", key: "VUE" },
      { label: "Components Application", key: "COMPONENTS" },
      // { label: "User Management", key: "USERMANAGEMENT" },
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
      case "USERMANAGEMENT":
        navigate("/user");
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
        console.log("Change theme success.");
      });
  }, [primaryTheme]);

  const handleUserInfoClick = () => {
    navigate("/user/info");
  };

  const handleLoginOutClick = () => {
    dispatch({
      type: "shared/setShared",
      payload: {
        token: null,
      },
    });
  };

  const items: MenuProps["items"] = [
    {
      key: "INFO",
      label: <Button onClick={handleUserInfoClick}>User Info</Button>,
    },
    {
      key: "LOGINOUT",
      label: <Button onClick={handleLoginOutClick}>Logout</Button>,
    },
  ];

  useEffect(() => {
    if (!token) {
      navigate("/user/login");
    }
  }, [token]);

  const renderUserInfo = useMemo(() => {
    if (!token) {
      return "None User";
    } else {
      return <>{token.username}</>;
    }
  }, [token]);

  const renderContent = () => {
    if (token) {
      return (
        <div className="flex flex-row">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="vertical"
            theme="light"
            onClick={handleMenuClick}
            items={menuItems}
            className="justify-around bg-gray-300 menu-bg-color  min-h-screen"
          />
          <div className="flex-grow text-center justify-items-center mt-8">
            <Outlet />
          </div>
        </div>
      );
    }

    return <Outlet />;
  };

  return (
    <div>
      <div>
        <div className="top-1.5 menu-bg-color flex flex-row justify-between h-12 leading-10 px-5">
          <div>
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
          <div>
            <Dropdown menu={{ items }} placement="bottomLeft">
              <div>{renderUserInfo}</div>
            </Dropdown>
          </div>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default Layout;
