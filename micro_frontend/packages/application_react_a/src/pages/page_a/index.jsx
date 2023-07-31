import React, { useEffect, useState } from "react";
import { Button } from "antd";

const PageA = (props) => {
  const { state, setShared } = props;
  const { count } = state;

  const handleClick = () => {
    setShared({
      count: count + 1,
    });
  };

  return (
    <div>
      <div>Module A</div>
      <div>{count}</div>
      <Button onClick={handleClick}>数据发送1</Button>
    </div>
  );
};

export default PageA;
