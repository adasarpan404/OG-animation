import React from "react";
import { useState } from "react/cjs/react.development";
import "./styles/come-to-middle.css";
import "./styles/common.css";
import "./styles/animations.css";

function ComeToMiddle(): JSX.Element {
  const [classForActive, setClassForActive] = useState(false);
  const setActive = () => {
    setClassForActive((classForActive: Boolean) => !classForActive);
  };
  return (
    <div
      className={`box ${classForActive ? "active" : "not-active"}`}
      onClick={setActive}
    >
      <div className="comeToMiddleLine firstChild"></div>
      <div className="comeToMiddleLine secondChild"></div>
      <div className="comeToMiddleLine thirdChild"></div>
    </div>
  );
}

export default ComeToMiddle;
