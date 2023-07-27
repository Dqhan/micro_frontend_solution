import React, { useEffect } from "react";
import { Input } from "antd";
import md from "../../documents/input.md";

const CustomInput = () => {
  useEffect(() => {
    document.getElementById(
      "application-components-input-component"
    ).innerHTML = marked(md);
  }, []);

  return (
    <div>
      <Input style={{ width: "200px" }} />
      <div id="application-components-input-component"></div>
    </div>
  );
};

export default CustomInput;
