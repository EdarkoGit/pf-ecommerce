import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: ${({ bgColor }) => bgColor || "inherit"};
  border: ${({ border }) => border || "none"};
  max-width: ${({ width }) => width || "1024px"};
  margin:${({ margin }) => margin || "0 auto"};
`;