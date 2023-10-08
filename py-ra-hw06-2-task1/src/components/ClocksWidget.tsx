import { useState, useEffect } from 'react'
import { Clock } from './Clock'
import '../css/ClocksWidget.css'
import { type ClockItem } from '../App'

type ClocksWidgetProps = {
  clockList: ClockItem[]
}

function ClocksWidget ({ clockList }: ClocksWidgetProps): JSX.Element {
  const [time, setTime] = useState<Date>(new Date())
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date())
    }, 1000)
  }, [time])

  return (
        <div className="clocks">
            {clockList.map((clock) => <Clock key={clock.id} name={clock.name} timezone={clock.timezone} time={time} />)}
        </div>
  )
}

export default ClocksWidget
