type NameInputProps = {
  name: string
  handleNameInput: (name: string) => void
}

function NameInput ({ name, handleNameInput }: NameInputProps): JSX.Element {
  return (
    <div className="name">
        <input type="text" id="name" value={name} onChange={(e) => { handleNameInput(e.target.value) }}/>
        <label htmlFor="name">Название</label>
    </div>
  )
}

export default NameInput
