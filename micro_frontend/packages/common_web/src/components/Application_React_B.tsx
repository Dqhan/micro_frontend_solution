import { mount } from "application_react_b/bootstrap";
import React, { useRef, useEffect } from "react";
import Shared from "../../utils";

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, {
      basePath: "/react-app-b",
      prefixCls: "app-b",
      shared: new Shared("react-app-b"),
    });
  }, []);

  return <div ref={ref} />;
};
