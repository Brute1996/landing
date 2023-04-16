import styled from "@emotion/styled";

export const HeroSectionStyle = styled.div`
  padding: 45px 0 135px;
  display: flex;
`;

export const HeroSectionText = styled.p`
  position: relative;
  font-family: "Oswald";
  font-weight: 500;
  font-size: 90px;
  line-height: 1.17;
  text-transform: uppercase;

  max-width: 503px;
  margin-top: 335px;

  .look-word {
    position: absolute;
    left: 298px;
    top: 50%;
    transform: rotate(10.48deg) translate(0, -50%);

    background-color: #bafd37;
    border-radius: 9px;
    padding: 0 8px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  }

  .look-word-star {
    position: absolute;
    line-height: 1.47;
    top: -38px;
    right: -27px;
    transform: rotate(-10.48deg);
  }
`;
