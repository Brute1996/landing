import styled from "@emotion/styled";

export const StaticMenuBarStle = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: 1200px) {
    justify-content: start;
  }
`;
