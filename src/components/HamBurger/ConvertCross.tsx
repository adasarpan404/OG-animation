import React from "react";
import { useState } from "react/cjs/react.development";
import { Box } from "./styles/common";
import {
  ActiveConvertCrossFirstChild,
  ActiveConvertCrossSecondChild,
  ActiveConvertCrossThirdChild,
  NActiveConvertCrossFirstChild,
  NActiveConvertCrossSecondChild,
  NActiveConvertCrossThirdChild
} from "./styles/convert-cross";

function ConvertCross(): JSX.Element {
  const [classForActive, setClassForActive] = useState(false);

  const setActive = () => {
    setClassForActive((classForActive: Boolean) => !classForActive);
  };

  return (
    <>
      {classForActive ? (
        <Box>
          <ActiveConvertCrossFirstChild />
          <ActiveConvertCrossSecondChild />
          <ActiveConvertCrossThirdChild />
        </Box>
      ) : (
        <Box>
          <NActiveConvertCrossFirstChild />
          <NActiveConvertCrossSecondChild />
          <NActiveConvertCrossThirdChild />
        </Box>
      )}
    </>
  );
}

export default ConvertCross;
