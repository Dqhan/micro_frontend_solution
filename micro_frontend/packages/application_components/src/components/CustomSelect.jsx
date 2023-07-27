import React, { useEffect } from "react";
import { Select } from "antd";
import md from "../../documents/select.md";

const CustomSelect = () => {
  useEffect(() => {
    document.getElementById(
      "application-components-select-component"
    ).innerHTML = marked(md);
  }, []);

  return (
    <div>
      <Select
        style={{ width: "200px" }}
        options={[
          { label: "option 1", value: "1" },
          { label: "option 2", value: "2" },
        ]}
      />
      <div id="application-components-select-component"></div>
    </div>
  );
};

export default CustomSelect;
