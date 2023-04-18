import styled from "@emotion/styled";

export const TextImageMaskStyle = styled.svg`
  z-index: 2;
  max-width: 467px;
  max-height: 710px;
  margin: 0 auto;

  image {
    animation: zoominoutsinglefeatured 20s infinite;
  }

  @media (min-width: 1351px) {
    margin-top: 20px;
    margin-left: 101px;
  }

  @keyframes zoominoutsinglefeatured {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
