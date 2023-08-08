import React, { useEffect } from "react";
import InputComponent from "../../library/InputComponent";
import md from "../../../documents/input.md";

const Input = () => {
  useEffect(() => {
    document.getElementById(
      "application-components-input-component"
    ).innerHTML = marked(md);
  }, []);

  return (
    <div>
      <div>组件展示</div>
      <InputComponent />
      <div id="application-components-input-component"></div>
    </div>
  );
};

export default Input;
