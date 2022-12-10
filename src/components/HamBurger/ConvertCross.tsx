import React from "react";
import { useState } from "react/cjs/react.development";
import "./styles/convert-cross.css";
// import styles from "./styles/common.module.css"; uncomment this line and convert the common.css to common.module.css
import "./styles/animations.css";
import "./styles/common.css";
function ConvertCross(): JSX.Element {
  const [classForActive, setClassForActive] = useState(false);

  const setActive = () => {
    setClassForActive((classForActive: Boolean) => !classForActive);
  };
  return (
    <div
      className={`box ${classForActive ? "active" : "not-active"}`}
      onClick={setActive}
    >
      <div className="convertcross firstChild"></div>
      <div className="convertcross secondChild"></div>
      <div className="convertcross thirdChild"></div>
    </div>
  );
}

export default ConvertCross;
