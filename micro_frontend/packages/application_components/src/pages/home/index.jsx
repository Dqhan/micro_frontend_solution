import React, { useEffect } from "react";
import homeMD from "../../../documents/home.md";

const Home = () => {
  useEffect(() => {
    document.getElementById("components-home").innerHTML = marked(homeMD);
  }, []);

  return <div id="components-home"> </div>;
};

export default Home;
