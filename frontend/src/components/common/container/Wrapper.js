import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: ${({ bgColor }) => bgColor || "inherit"};
  border: ${({ border }) => border || "none"};
  width: auto;
  max-width: ${({ width }) => width || "992px"};
  margin:${({ margin }) => margin || "0 auto"};
  margin-top: ${({marginTop}) => marginTop || "auto"};
  /* position:; */
`;
 