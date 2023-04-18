import styled from "@emotion/styled";

export const HeroSectionStyle = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 20px 0 45px;

  .hero-left-side {
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
  }

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    padding: 30px 0 75px;

    .hero-left-side {
      gap: 50px;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    padding: 45px 0 135px;

    .hero-left-side {
      margin: 0;
      flex-direction: column;
      gap: 0;
      align-items: start;
    }
  }
`;

export const HeroSectionText = styled.p`
  position: relative;
  font-family: "Oswald";
  font-weight: 500;
  font-size: 45px;
  line-height: 1.17;
  text-transform: uppercase;

  max-width: 503px;
  width: 265px;

  @media (min-width: 768px) {
    width: auto;
    font-size: 80px;
  }

  @media (min-width: 1200px) {
    margin-top: 335px;
    font-size: 90px;
  }

  .look-word {
    position: absolute;
    left: 148px;
    top: 50%;
    transform: rotate(10.48deg) translate(0, -50%);

    background-color: #bafd37;
    border-radius: 9px;
    padding: 0 8px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

    animation: pulsate 5s infinite;

    @keyframes pulsate {
      0% {
        scale: 1;
      }
      50% {
        scale: 1.1;
      }
      100% {
        scale: 1;
      }
    }
    transition: background-color 500ms;
    &:hover {
      background-color: #f54329;
    }

    @media (min-width: 768px) {
      left: 268px;
    }

    @media (min-width: 1200px) {
      left: 298px;
    }
  }

  .look-word-star {
    position: absolute;
    line-height: 1.47;
    top: -21px;
    right: -12px;
    transform: rotate(-10.48deg);

    @media (min-width: 768px) {
      top: -38px;
      right: -25px;
    }

    @media (min-width: 1200px) {
      top: -38px;
      right: -27px;
    }
  }
`;
