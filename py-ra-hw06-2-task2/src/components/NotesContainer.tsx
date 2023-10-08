import Note from './Note'
import type { NoteType } from '../App'
import SERVER_URL from './constants'
import '../css/NotesContainer.css'

type NotesContainerProps = {
  notes: NoteType[]
  onFetchNotes: () => void
}

async function deleteNote (url: string, id: number): Promise<Response> {
  const response = await fetch(url + '/notes/' + id, {
    method: 'DELETE'
  })
  return response
}

function NotesContainer ({ notes, onFetchNotes }: NotesContainerProps): JSX.Element {
  function handleDelete (id: number): void {
    void deleteNote(SERVER_URL, id)
      .then(() => {
        onFetchNotes()
      })
  }

  return (
        <div className="note-container">
            {notes.map(note => <Note key={note.id} id={note.id} content={note.content} onNoteDelete={(id) => { handleDelete(id) }} />)}
        </div>
  )
}

export default NotesContainer
