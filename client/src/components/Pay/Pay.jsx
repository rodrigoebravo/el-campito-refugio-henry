import React from "react";

const Pay = () => {
  function goHome() {
    window.location = process.env.FRONT || "http://localhost:3000/";
  }
  setTimeout(goHome, 3000);
  return <div>Pay</div>;
  
};

export default Pay;
