import React from "react";
import { useState } from "react/cjs/react.development";
import "./Style/ConvertArrow.css";
function ConvertArrow(): JSX.Element {
  const [classForActive, setClassForActive] = useState(false);
  const setActive = () => {
    setClassForActive((classForActive: Boolean) => !classForActive);
  };
  return (
    <div
      className={`convertArrow ${
        classForActive ? "btn-active" : "btn-not-active"
      }`}
      onClick={setActive}
    >
      <div className="firstChild"></div>
      <div className="secondChild"></div>
      <div className="thirdChild"></div>
    </div>
  );
}

export default ConvertArrow;
