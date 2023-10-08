import { useState } from 'react'
import SERVER_URL from './constants'

type AddNoteProps = {
  onFetchNotes: () => void
}

async function postNote (text: string, url: string): Promise<Response> {
  const response = fetch(url + '/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: 0, content: text })
  })
  return await response
}

function AddNote ({ onFetchNotes }: AddNoteProps): JSX.Element {
  const [text, setText] = useState('')

  function handleClick (): void {
    if (text) {
      void postNote(text, SERVER_URL)
        .then(() => {
          setText('')
          onFetchNotes()
        })
    }
  }

  return (
    <div className="notes-input">
      <input value={text} onChange={(e) => { setText(e.target.value) }} type="text" />
      <button onClick={handleClick}>send</button>
    </div>
  )
}

export default AddNote
