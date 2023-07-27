import { mount } from "application_components/bootstrap";
import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    const {} = mount(ref.current, {
      basePath: "/components",
      prefixCls: 'components' 
    });
  }, []);

  return <div ref={ref} />;
};
