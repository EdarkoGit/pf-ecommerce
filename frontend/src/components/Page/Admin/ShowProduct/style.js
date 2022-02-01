import styled from "styled-components";
import { bgButtonAdmin } from "../../../../utilsStyles/utilsColors";

export const ShowProductStyled = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: white;
  div {
    display: grid;
    gap: 10px;
    table {
      caption {
        font-weight: bold;
      }
      tbody {
        tr {
          background-color: ${bgButtonAdmin};
        }
      }
    }
  }
  @media (min-width: 768px) {
    margin-left: 250px;
  }
  @media (min-width: 1024px) {
    th,
    td {
      padding: 15px;
    }
  }
`;
