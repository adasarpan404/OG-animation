import React from "react";
import { useState } from "react/cjs/react.development";
import "./styles/convert-arrow.css";
import "./styles/common.css";
import "./styles/animations.css";

function ConvertArrow(): JSX.Element {
  const [classForActive, setClassForActive] = useState(false);
  const setActive = () => {
    setClassForActive((classForActive: Boolean) => !classForActive);
  };

  return (
    <div
      className={`box ${classForActive ? "active" : "not-active"}`}
      onClick={setActive}
    >
      <div className="convertArrowLine firstChild"></div>
      <div className="convertArrowLine secondChild"></div>
      <div className="convertArrowLine thirdChild"></div>
    </div>
  );
}

export default ConvertArrow;
