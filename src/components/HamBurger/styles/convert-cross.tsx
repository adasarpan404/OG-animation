import styled from "styled-components";
import { FirstChild, SecondChild, ThirdChild } from "./common";
import { keyframes } from "styled-components";

/** keyframes for animation */
const /**@desc used for converting first Line */
  convertcrossTopBefore = keyframes`
    0% {
        transform: rotate(0);
    }
    50% {
        top: 22px;
        transform: rotate(0);
    }
    100% {
        top: 22px;
        transform: rotate(-45deg);
    }
    `;

const /**@desc used for reversing first Line */
  convertcrossTopAfter = keyframes`
    0% {
        top: 22px;
        transform: rotate(-45deg);
    }
    50% {
        top: 22px;
        transform: rotate(0);
    }
    100% {
        transform: rotate(0);
    }
    `;

const /**@desc used for converting Middle Line */
  convertcrossMiddleBefore = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(45deg);
    }
  `;
const /**@desc used for reversing Middle Line */
  convertcrossMiddleAfter = keyframes`
    0% {
        transform: rotate(45deg);
    }
    100% {
      transform: rotate(0);
    }
  `;

const /**@desc used for converting the bottom line */
  convertcrossBottomBefore = keyframes`
    0% {
        transform: rotate(0);
    }
    50% {
        bottom: 22px;
        transform: rotate(0);
    }
    100% {
        bottom: 22px;
        transform: rotate(45deg);
    }
  `;
const /**@desc used for converting the bottom line */
  convertcrossBottomAfter = keyframes`
    0% {
        bottom: 22px;
        transform: rotate(45deg);
    }
    50% {
        bottom: 22px;
        transform: rotate(0);
    }
    100% {
        transform: rotate(0);
    }
  `;
/**end of key frames */
const /** @desc .convertcross*/ Convertcross = styled.div`
    display: block;
    width: 100%;
    border-radius: 3px;
    height: 8px;
    background: #000;
    transition: all 0.3s;
    position: relative;
  `;

const /**@desc .convertcross.firstChild */
  ConvertCrossFirstChild = styled(Convertcross)`
    ${FirstChild}
  `;
const /**@desc .convertcross.secondChild*/
  ConvertCrossSecondChild = styled(Convertcross)`
    ${SecondChild}
  `;
const /**@desc .convertcross.thirdChild */
  ConvertCrossThirdChild = styled(Convertcross)`
    ${ThirdChild}
  `;

export const /**@desc .active .convertcross.firstChild */
  ActiveConvertCrossFirstChild = styled(ConvertCrossFirstChild)`
    animation: ease-in-out 0.3s ${convertcrossTopBefore} forwards;
  `;

export const /**@desc .not-active .convertCross.firstChild */
  NActiveConvertCrossFirstChild = styled(ConvertCrossFirstChild)`
    animation: ease-in-out 0.3s ${convertcrossTopAfter} forwards;
  `;
export const /**@desc .active .convertcross.secondChild */
  ActiveConvertCrossSecondChild = styled(ConvertCrossSecondChild)`
    animation: ease-in-out 0.3s ${convertcrossMiddleBefore} forwards;
  `;

export const /**@desc .not-active .convertCross.secondChild */
  NActiveConvertCrossSecondChild = styled(ConvertCrossThirdChild)`
    animation: ease-in-out 0.3s ${convertcrossMiddleAfter} forwards;
  `;

export const /**@desc .active .convertcross.thirdChild */
  ActiveConvertCrossThirdChild = styled(ConvertCrossThirdChild)`
    animation: ease-in-out 0.3s ${convertcrossBottomBefore} forwards;
  `;

export const /**@desc .not-active .convertCross.thirdChild */
  NActiveConvertCrossThirdChild = styled(ConvertCrossThirdChild)`
    animation: ease-in-out 0.3s ${convertcrossBottomAfter} forwards;
  `;
