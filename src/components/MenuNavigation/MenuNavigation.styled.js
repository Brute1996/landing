import styled from "@emotion/styled";

export const MenuNavigationStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e1e3e9;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: translateY(-100%);
  transition: transform 500ms;

  &.menu-active {
    transform: translateY(0%);
  }

  @media (min-width: 768px) {
    position: static;
    height: auto;
    width: auto;
    transform: translateY(0);
  }

  @media (min-width: 1200px) {
    width: 595px;
    margin-left: auto;
    margin-right: 89px;
  }
`;

export const NavigationListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    width: 100%;
  }

  .nav-list-item {
    font-size: 36px;
    line-height: 1.16;

    transition: scale 300ms;
    &:hover,
    &:focus {
      scale: 1.1;
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;
