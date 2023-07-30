import { mount  } from "application_login/bootstrap";
import React, { useRef, useEffect } from "react";
import shared from "../../utils";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      basePath: "/user",
      prefixCls: "user",
      shared,
    });
  }, []);

  return <div ref={ref} />;
};
