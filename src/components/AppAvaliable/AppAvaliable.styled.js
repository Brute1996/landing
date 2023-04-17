import styled from "@emotion/styled";

export const AppAvaliableStyle = styled.div`
  .app-link {
    border-radius: 50%;
    width: 55.5px;
    height: 55.5px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #2d3240;
  }

  .app-avaliable-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.16;
  }
`;

export const AvaliableAppList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  li {
    border-radius: 50%;
    transition: transform 300ms;

    &:hover,
    &:focus {
      transform: rotate(-10deg);
    }
  }

  li:not(:first-of-type) {
    border: 1px solid #e1e3e9;
    position: absolute;
    left: 43.5px;

    &:hover,
    &:focus {
      transform: rotate(10deg);
    }
  }
`;
