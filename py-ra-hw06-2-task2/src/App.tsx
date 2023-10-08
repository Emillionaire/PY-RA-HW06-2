import { useState, useEffect } from 'react'
import NotesContainer from './components/NotesContainer'
import AddNote from './components/AddNote'
import SERVER_URL from './components/constants'
import './App.css'

type NoteType = {
  id: number
  content: string
}

async function fetchNotes (url: string): Promise<NoteType[]> {
  const response = await fetch(url + '/notes')
  const data: NoteType[] = await response.json()
  return data
}

function App (): JSX.Element {
  const [notes, setNotes] = useState<NoteType[]>([])
  useEffect(() => {
    void fetchNotes(SERVER_URL).then(data => { setNotes(data) })
  }, [])

  return (
    <div className="note-app">
      <div className='app-title'>Notes <button onClick={() => { void fetchNotes(SERVER_URL).then(data => { setNotes(data) }) }}>Refresh</button></div>
      <NotesContainer notes={notes} onFetchNotes={() => { void fetchNotes(SERVER_URL).then(data => { setNotes(data) }) }} />
      <AddNote onFetchNotes={() => { void fetchNotes(SERVER_URL).then(data => { setNotes(data) }) }} />
    </div>
  )
}

export { App }
export type { NoteType }
