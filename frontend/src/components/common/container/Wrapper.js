import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ bgColor }) => bgColor || "inherit"};
  max-width: ${({ width }) => width || "992px"};
  margin:${({ margin }) => margin || "0 auto"};
  margin-top: ${({marginTop}) => marginTop || "auto"};
`;
 