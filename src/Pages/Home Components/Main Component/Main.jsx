import Events from '../Main Component/Eventos Component/Events'
import News from '../Main Component/Novedades Component/News'
import { Section } from '../../../Styled-Components/sectionStyled'


const Main = () => {
  return (
    <main>
        <Section>
            <News/>
            <Events/>
        </Section>
    </main>
  )
}

export default Main