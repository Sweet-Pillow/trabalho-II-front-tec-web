import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

export default function(){
    const localizer = momentLocalizer(moment)
    const MyCalendar = (props) => (
        <div>
          <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      )
    return(MyCalendar)
}

