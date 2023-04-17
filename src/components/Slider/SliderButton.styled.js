import styled from "@emotion/styled";

export const SliderButton = styled.button`
  position: absolute;
  z-index: 9;
  top: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  transform: matrix(-1, 0, 0, 1, 0, 0) translateY(-50%);
  transition: scale 100ms;

  @media (min-width: 768px) {
    width: 76px;
    height: 76px;
  }

  &:active {
    scale: 0.9;
  }

  &.prev {
    left: -21px;
  }

  &.next {
    right: -21px;
  }
`;
