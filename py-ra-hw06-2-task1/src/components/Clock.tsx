import '../css/Clock.css'

type ClockProps = {
  name: string
  timezone: string
  time: Date
}

function Clock ({ name, timezone, time }: ClockProps): JSX.Element {
  const hours = time.getUTCHours() + Number(timezone)
  const minutes = time.getUTCMinutes()
  const seconds = time.getUTCSeconds()

  return (
        <div className="clock-panel">
            <div className="clock-name">{name}</div>
            <div className="clock">
                <div className="hour" style={{
                  transform: `rotate(${hours * 30}deg)`
                }}></div>
                <div className="minute" style={{
                  transform: `rotate(${minutes * 6}deg)`
                }}></div>
                <div className="second" style={{
                  transform: `rotate(${seconds * 6}deg)`
                }}></div>
            </div>
        </div>
  )
}

export { Clock }
export type { ClockProps }
