import Card from "../Card";
import { StyledContainerGrid } from "./styled";

export default function ContainerGrid({ data }) {
  return (
    <StyledContainerGrid>
      {
        data.map(({ imgsrc, id }) =>
          <Card key={id} imgsrc={imgsrc} text/>)
      }
    </StyledContainerGrid>
  )
}