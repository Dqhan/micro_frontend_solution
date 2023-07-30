import React from "react";
import { Button } from "antd";

const PageA = (props) => {
  const { shared } = props;

  const handleClick1 = () => {
    shared.setShared("0");
  };

  const handleClick2 = () => {
    shared.setShared("1");
  };


  return (
    <div>
      <div>Module A</div>
      {/* <div>{sharedState}</div> */}
      <Button onClick={handleClick1}>数据发送1</Button>
      <Button onClick={handleClick2}>数据发送2</Button>
    </div>
  );
};

export default PageA;
