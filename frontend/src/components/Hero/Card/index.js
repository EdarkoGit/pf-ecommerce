import styled from "styled-components";

const CardStyled = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
  /* max-width: ${({ maxWidth }) => maxWidth || "350px"}; */
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    padding: 0;
    width: 100%;
    height: auto;
    max-width: ${({ maxWidth }) => maxWidth || "350px"};
    @media (min-width: 992px) {
      /* min-width: auto; */
      flex: 30%;
    }
  }
`

export default function Card(props) {
  return (
    <CardStyled {...props}>
      <img src={props.imgsrc} alt="" />
    </CardStyled>
  )
}
