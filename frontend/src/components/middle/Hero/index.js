import styled from "styled-components";

const StyledHero = styled.section`
  background-color: ${({ bgColor }) => bgColor || "#16bcdc"};

  > * {
    height: 200px;
  }
  & .right {

  
  }
  `


export default function Hero() {
  return (
    <StyledHero>
      <div className="left">left</div>
      <div className="right">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </StyledHero>
  )
}

