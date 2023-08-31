import React from 'react'
import { Container, TitleContainer, Content,TextContainer, Text } from '../../../../../Styled-Components/Home-Styed/New-styled/newNoticeStyled'

const NewNotice = ({title, img, date, text}) => {
  return (
    <Container>
        <TitleContainer>
            {title}
        </TitleContainer>
        <Content>
            <img src={img} alt={title} />
            <TextContainer>
            <i class="fa-regular fa-clock"></i><span>{date}</span>
                {console.log(date)}
                <Text>
                    {text}
                </Text>
            </TextContainer>
        </Content>
    </Container>
  )
}

export default NewNotice