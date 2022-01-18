import styled from "styled-components";

export const Img = styled.div`
  background-image: ${({ bgImage }) => bgImage || ""};
  background-color: ${({ bgColor }) => bgColor || "#263C97"};
  background-attachment: ${({ bgAttachment }) => bgAttachment || "#8575FF"};
  background-size: ${({ bgSize }) => bgSize || "auto"};
  background-position: ${({ bgPosition }) => bgPosition || "center"};
  border: ${({ border }) => border || "none"};
  max-width: ${({ maxwidth }) => maxwidth || "30rem"};
  min-width: ${({ minwidth }) => minwidth || "30rem"};
  max-height: ${({ maxheight }) => maxheight || "30rem"};
  min-height: ${({ minheight }) => minheight || "30rem"};
  margin:${({ margin }) => margin || "auto"};
  background-repeat: no-repeat;
  position: ${({ position }) => position || "initial"};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;