import styled from "@emotion/styled";

export const BlueLineAnimate = styled.svg`
  position: absolute;
  width: 110%;
  top: 25%;
  left: -3%;

  @media (min-width: 1200px) {
    top: 7%;
    left: -3%;
  }

  path {
    animation: line-draw 17s linear infinite;
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    stroke-width: 12;

    @media (min-width: 1200px) {
      stroke-width: 6;
    }
  }

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
