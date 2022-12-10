import React from "react";
import { useState } from "react/cjs/react.development";
import "./styles/irregular.css";
import "./styles/common.css";
import "./styles/animations.css";

function Irregular(): JSX.Element {
  const [classForActive, setClassForActive] = useState(false);
  const setActive = () => {
    setClassForActive((classForActive: Boolean) => !classForActive);
  };
  return (
    <div
      className={`box ${
        classForActive ? "active" : "not-active"
      }`}
      onClick={setActive}
    >
      <div className="convertIrregularLine firstChild"></div>
      <div className="convertIrregularLine secondChild"></div>
      <div className="convertIrregularLine thirdChild"></div>
    </div>
  );
}

export default Irregular;
