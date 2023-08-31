import { NewsContainer } from '../../../../Styled-Components/Home-Styed/New-styled/newStyled'
import { news } from '../../../../Novedades y Eventos/newsInfo'
import NewNotice from './NewNotice component/NewNotice'

const News = () => {


  return (
    <NewsContainer>
      NOVEDADES
      {news.map(item => {
        return <NewNotice key={item.title} title={item.title} date={item.date} text={item.text} img={item.img}/>
      })}
    </NewsContainer>
  )
}

export default News