import styled from "@emotion/styled";

export const BuyButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-family: "Oswald";
  font-weight: 700;

  line-height: 1.47;
  color: #fff;
  text-transform: uppercase;

  width: 76px;
  height: 76px;

  border-radius: 50%;

  background: #f54329;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  transform: rotate(19.5deg);

  transition: scale 100ms;

  @media (min-width: 768px) {
    font-size: 34px;
    width: 106px;
    height: 106px;
  }

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }
`;
