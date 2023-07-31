import { mount } from "application_react_a/bootstrap";
import React, { useRef, useEffect } from "react";
import Shared from "../../utils";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      basePath: "/react-app-a",
      prefixCls: "app-a",
      shared: new Shared("react-app-a"),
    });
  }, []);

  return <div ref={ref} />;
};
