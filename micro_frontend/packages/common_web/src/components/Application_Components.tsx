import { mount } from "component_library/bootstrap";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, {
      basePath: "/components",
      prefixCls: 'components' 
    });
  }, []);

  return <div ref={ref} />;
};
