import { mount } from "application_login/bootstrap";
import React, { useRef, useEffect } from "react";
import Shared from "../../utils";

export default () => {
  const ref = useRef(null);
  console.log('1', 1)
  useEffect(() => {
    mount(ref.current, {
      basePath: "/user",
      prefixCls: "user",
      shared: new Shared("user-management"),
    });
  }, []);

  return <div ref={ref} />;
};
