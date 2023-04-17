import styled from "@emotion/styled";

export const NotAvaliavlePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;

  h2 {
    font-size: 50px;
    margin-bottom: 15px;
  }

  p {
    font-size: 25px;
    margin-bottom: 40px;
  }

  .home-btn {
    font-size: 25px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;

    box-shadow: 1px 5px 8px #000;
    border-radius: 9px;
    padding: 6px;
    width: 150px;
    background-color: #3f51b5;

    transition: scale 50ms;

    &:active {
      scale: 0.9;
    }
  }
`;
