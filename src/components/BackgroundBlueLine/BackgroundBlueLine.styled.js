import styled from "@emotion/styled";

export const BlueLineAnimate = styled.svg`
  path {
    animation: line-draw 17s linear infinite;
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
  }
  position: absolute;
  top: -34%;
  left: -2%;
  width: 110%;
  height: 100%;

  @keyframes line-draw {
    0% {
      stroke-dashoffset: 2000;
    }
    50% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 2000;
    }
  }
`;
