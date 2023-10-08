type NoteProps = {
  id: number
  content: string
  onNoteDelete: (id: number) => void
}

function Note ({ id, content, onNoteDelete }: NoteProps): JSX.Element {
  return (
        <div className="note">
            {content}
            <button onClick={() => { onNoteDelete(id) }} className="delete">X</button>
        </div>
  )
}

export default Note
