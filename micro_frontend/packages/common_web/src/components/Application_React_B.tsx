import { mount } from "application_react_b/bootstrap";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, {
      basePath: "/react-app-b",
      prefixCls: "app-b",
    });
  }, []);

  return <div ref={ref} />;
};
