import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 30px;

    .buy-button {
      margin: 0 auto;
    }
  }
  @media (min-width: 1351px) {
    flex-direction: row;

    .buy-button {
      margin: 0;
    }
  }
`;

export const NavMenuStyle = styled.nav`
  display: flex;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 1351px) {
    gap: 208px;
    flex-direction: row;
  }

  align-items: center;

  .logo {
    font-family: "Jomhuria";
    font-size: 80px;
    line-height: 1;
    color: #2e3341;
    text-transform: uppercase;

    transition: scale 300ms;
    &:hover,
    &:focus {
      scale: 1.1;
    }
  }

  .nav-list {
    display: flex;
    justify-content: space-between;
    width: 595px;

    &-item {
      font-size: 18px;
      line-height: 1.16;

      transition: scale 300ms;

      &:hover,
      &:focus {
        scale: 1.1;
      }
    }
  }
`;
