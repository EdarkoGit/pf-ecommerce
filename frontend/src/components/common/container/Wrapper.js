import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: ${({ bgColor }) => bgColor || "red"};
  border: ${({ border }) => border || "none"};
  max-width: ${({ width }) => width || "1280px"};
  margin:${({ margin }) => margin || "0 auto"};
  margin-top: ${({marginTop}) => marginTop || "auto"};
`;

// export default function Wrapper({children}) {
//   return (
//     <StyledWrapper>
//       {children}
//     </StyledWrapper>
//   )
// }
