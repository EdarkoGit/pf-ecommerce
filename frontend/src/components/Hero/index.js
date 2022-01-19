import styled from "styled-components";

const SectionHero = styled.section`
  display: flex;
  background: teal;

  > * {
    height: 200px;
  }
  & .left {
    background: #0dcaf0;
  }
  & .right {
    background: #dc3545;
  }
  `


export default function Hero() {
  return (
    <SectionHero>
      <div className="left">left</div>
      <div className="right">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </SectionHero>
  )
}

