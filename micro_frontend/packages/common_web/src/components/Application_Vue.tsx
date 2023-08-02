import { mount } from "application_vue/bootstrap";
import React, { useRef, useEffect } from "react";
import Shared from "../../utils";

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, {
      basePath: "/vue-app",
      prefixCls: "vue-app",
      shared: new Shared("vue-app"),
    });
  }, []);

  return <div ref={ref} />;
};
