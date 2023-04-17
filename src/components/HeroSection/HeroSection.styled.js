import styled from "@emotion/styled";

export const HeroSectionStyle = styled.div`
  display: flex;

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    padding: 30px 0 75px;

    .hero-left-side {
      display: flex;
      gap: 50px;
      margin: 0 auto;
      margin-top: 30px;
    }
  }

  @media (min-width: 1351px) {
    flex-direction: row;
    padding: 45px 0 135px;

    .hero-left-side {
      flex-direction: column;
      gap: 0;
      margin: 0;
    }
  }
`;

export const HeroSectionText = styled.p`
  position: relative;
  font-family: "Oswald";
  font-weight: 500;
  font-size: 90px;
  line-height: 1.17;
  text-transform: uppercase;

  max-width: 503px;

  @media (min-width: 768px) {
    font-size: 80px;
  }

  @media (min-width: 1351px) {
    margin-top: 335px;
    font-size: 90px;
  }

  .look-word {
    position: absolute;
    left: 298px;
    top: 50%;
    transform: rotate(10.48deg) translate(0, -50%);

    background-color: #bafd37;
    border-radius: 9px;
    padding: 0 8px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

    @media (min-width: 768px) {
      left: 268px;
    }

    @media (min-width: 1351px) {
      left: 298px;
    }
  }

  .look-word-star {
    position: absolute;
    line-height: 1.47;
    top: -38px;
    right: -27px;
    transform: rotate(-10.48deg);
  }
`;
