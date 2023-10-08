import { type ClockItem } from '../App'
import { v4 } from 'uuid'

type AddTimeButtonProps = {
  name: string
  timezone: string
  onClockAdd: (clock: ClockItem) => void
  resetName: () => void
  resetTimezone: () => void
}

function AddTimeButton ({
  name,
  resetName,
  timezone,
  resetTimezone,
  onClockAdd
}: AddTimeButtonProps): JSX.Element {
  const id = v4()

  function handleClick (): void {
    onClockAdd({ id, name, timezone })
    resetName()
    resetTimezone()
  }

  return (
    <button onClick={handleClick} type="submit">Добавить</button>
  )
}

export default AddTimeButton
