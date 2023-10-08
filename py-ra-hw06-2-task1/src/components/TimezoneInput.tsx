type TimezoneInputProps = {
  timezone: string
  handleTimezoneChange: (timezone: string) => void
}

function TimezoneInput ({ timezone, handleTimezoneChange }: TimezoneInputProps): JSX.Element {
  return (
    <div className="timezone">
        <input type="number" id="timezone" value={timezone} onChange={(e) => { handleTimezoneChange(e.target.value) }}/>
        <label htmlFor="timezone">Временная зона</label>
    </div>
  )
}

export default TimezoneInput
