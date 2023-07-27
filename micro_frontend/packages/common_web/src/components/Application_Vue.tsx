import { mount } from "application_vue/bootstrap";
import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      isMemoryHistory: true,
      basePath: "/vue-app",
      currentPath: location.pathname,
      onNavigate: (nextPathname) => {
        const { pathname } = location;
        if (pathname !== nextPathname) {
          navigate(nextPathname);
        }
      },
    });
    navigate(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
