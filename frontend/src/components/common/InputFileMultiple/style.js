import styled from "styled-components";
import {
  inputFileStyle,
  labelFileStyle,
} from "../../../utilsStyles/mixInputFile";
import { errSpan } from "../../../utilsStyles/mixSpan";

export const InputFileMultipleStyled = styled.div`
  position: relative;
  label {
    ${labelFileStyle}
  }
  input {
    ${inputFileStyle}
  }
  span {
    ${errSpan}
  }
`;
