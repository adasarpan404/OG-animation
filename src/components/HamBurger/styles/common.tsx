import styled from "styled-components";

export const /**@desc parent element of hamburger */
  Box = styled.div`
    width: 80px;
    cursor: pointer;
  `;

const /**@desc giving the margin second and third line */
  lastTwoLine = styled.div`
    margin-top: 14px;
  `;

export const /**@desc first line of hamburger */
  FirstChild = styled.div``;

export const /**@desc middle line of hamburger */
  SecondChild = styled.div(lastTwoLine);

export const /**@desc third line of hamburger */
  ThirdChild = styled.div(lastTwoLine);
