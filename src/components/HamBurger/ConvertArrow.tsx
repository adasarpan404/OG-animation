import React from "react";
import { useState } from "react/cjs/react.development";

function ConvertArrow(): JSX.Element {
  const [classForActive, setClassForActive] = useState(false);
  const setActive = () => {
    setClassForActive((classForActive: Boolean) => !classForActive);
  };
  return (
    <div
      className={`convertArrow ${classForActive ? "active" : "not-active"}`}
      onClick={setActive}
    >
      <div className="convertArrowLine firstChild"></div>
      <div className="convertArrowLine secondChild"></div>
      <div className="convertArrowLine thirdChild"></div>
    </div>
  );
}

export default ConvertArrow;
