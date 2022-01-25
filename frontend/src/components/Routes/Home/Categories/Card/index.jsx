import { Button } from '../../../../common/button/Button'
import { Link } from 'react-router-dom'
import { StyledCard } from '../../../../Hero/Card/styled'

export default function Card(props) {
  return (
    <StyledCard imgsrc={props.img} index={props.index}>
      <Link to="/shop" className="button">
        <Button
          bgColor="white"
          color="black"
          padding="1.4rem"
          width="auto"
        >{props.name}</Button>
      </Link>
    </StyledCard>

  )

}