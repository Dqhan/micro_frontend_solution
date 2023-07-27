import { mount  } from "application_react_a/bootstrap";
import React, { useRef, useEffect } from "react";
import shared from "../../utils";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      basePath: "/react-app-a",
      prefixCls: "app-a",
      shared,
    });
  }, []);

  return <div ref={ref} />;
};
