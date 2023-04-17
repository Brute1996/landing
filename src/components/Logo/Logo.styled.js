import styled from "@emotion/styled";

export const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  font-family: "Jomhuria";
  font-size: 60px;
  line-height: 1;
  color: #2e3341;
  text-transform: uppercase;

  transition: scale 300ms;
  &:hover,
  &:focus {
    scale: 1.1;
  }

  @media (min-width: 768px) {
    font-size: 80px;
  }
`;
