import { Container, Title, Img, Description } from '../../../../Styled-Components/Home-Styed/Events-styled/eventItemStyled'

const Event = ({title, img, description}) => {
  return (
    <Container>
        <Title>{title}</Title>
        <Img src={img}></Img>
        <Description>{description}</Description>
    </Container>
  )
}

export default Event