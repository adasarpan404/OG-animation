import React from "react";
import { useState } from "react/cjs/react.development";
import "./styles/convert-cross.css";
import "./styles/animations.css";
import { Box, FirstChild, SecondChild, ThirdChild } from "./styles/common";

function ConvertCross(): JSX.Element {
  const [classForActive, setClassForActive] = useState(false);

  const setActive = () => {
    setClassForActive((classForActive: Boolean) => !classForActive);
  };

  return (
    <Box
      className={`${classForActive ? "active" : "not-active"}`}
      onClick={setActive}
    >
      <div className="convertcross">
        <FirstChild />
      </div>

      <div className="convertcross">
        <SecondChild />
      </div>
      <div className="convertcross">
        <ThirdChild />
      </div>
    </Box>
  );
}

export default ConvertCross;
