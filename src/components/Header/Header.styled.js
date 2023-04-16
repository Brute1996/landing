import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  display: flex;
`;

export const NavMenuStyle = styled.nav`
  display: flex;
  align-items: center;

  .logo {
    font-family: "Jomhuria";
    font-size: 80px;
    line-height: 1;
    color: #2e3341;
    text-transform: uppercase;

    margin-right: 208px;
  }

  .nav-list {
    display: flex;
    justify-content: space-between;
    width: 595px;
    margin-right: 89px;

    &-item {
      font-size: 18px;
      line-height: 1.16;
    }
  }
`;
