import styled from "@emotion/styled";

export const TextImageMaskStyle = styled.div`
  display: flex;
  justify-content: center;

  svg {
    image {
      background-color: #fff;
    }
  }

  @media (min-width: 768px) {
    margin: 0 auto;
  }

  @media (min-width: 1351px) {
    margin-top: 20px;
    margin-left: 101px;
  }
`;
