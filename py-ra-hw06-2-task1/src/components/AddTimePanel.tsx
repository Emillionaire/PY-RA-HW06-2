import NameInput from './NameInput'
import TimezoneInput from './TimezoneInput'
import AddTimeButton from './AddTimeButton'
import { useState } from 'react'
import '../css/AddTimePanel.css'
import { type ClockItem } from '../App'

type AddTimePanelProps = {
  onClockAdd: (clock: ClockItem) => void
}

function AddTimePanel ({ onClockAdd }: AddTimePanelProps): JSX.Element {
  const [name, setName] = useState('')
  const [timezone, setTimezone] = useState('')

  return (
    <div className="add-time-panel">
      <NameInput name={name} handleNameInput={setName} />
      <TimezoneInput timezone={timezone} handleTimezoneChange={setTimezone} />
      <AddTimeButton name={name}
        resetName={() => { setName('') }}
        timezone={timezone}
        resetTimezone={() => { setTimezone('') }}
        onClockAdd={onClockAdd} />
    </div>
  )
}

export default AddTimePanel
