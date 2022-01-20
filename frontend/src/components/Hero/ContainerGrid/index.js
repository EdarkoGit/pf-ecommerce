import styled from 'styled-components';
import Card from "../Card/index";

const ContainerGridStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px 15px;
  @media (min-width: 768px) {
    flex: 2 43%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
function ContainerGrid({ data }) {
  return (
    <ContainerGridStyled>
      {
        data.map(({ imgsrc, id }) =>
          <Card key={id} imgsrc={imgsrc} />)
      }
    </ContainerGridStyled>
  )
}


export default ContainerGrid;