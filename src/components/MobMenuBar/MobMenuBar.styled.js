import styled from "@emotion/styled";

export const MobMenuBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
    & + .menu-mob-bar-copy {
      display: none;
    }
  }
`;

export const MobMenuBarStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background-color: #e1e3e9;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

  padding: 15px 20px;

  .burger-menu {
    z-index: 999;
    background-color: transparent;
    font-size: 40px;
    color: #000;
  }
`;
