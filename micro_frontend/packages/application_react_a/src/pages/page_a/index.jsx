import React, { useEffect } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

const PageA = (props) => {
  const { shared } = props;
  const { sharedState } = shared.getShared();
  const dispatch = useDispatch();
  const { test } = useSelector((state) => {
    return state.test;
  });

  const handleClick1 = () => {
    shared.setShared("0");
  };
  const handleClick2 = () => {
    shared.setShared("1");
  };
  const handleClick3 = () => {
    dispatch({
      type: "test/setTest",
      payload: test + 1,
    });
  };

  return (
    <div>
      <div>Module A</div>
      <div>{sharedState}</div>
      <Button onClick={handleClick1}>数据发送1</Button>
      <Button onClick={handleClick2}>数据发送2</Button>
      <Button onClick={handleClick3}>数据发送3</Button>
    </div>
  );
};

export default PageA;
