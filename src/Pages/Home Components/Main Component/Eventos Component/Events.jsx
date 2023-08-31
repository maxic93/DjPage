import { EventsContainer, EventSection } from '../../../../Styled-Components/Home-Styed/Events-styled/eventstyled'
import { events } from '../../../../Novedades y Eventos/newEvents'
import Event from './Event'

const Events = () => {

  return (
    <EventsContainer>
      <i class="fa-solid fa-calendar-check"></i>PROXIMOS EVENTOS
      <EventSection>
        {events.map(item => {
          return <Event title={item.title} img={item.img} description={item.description}/>
        })}
      </EventSection>
    </EventsContainer>
  )
}

export default Events