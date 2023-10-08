import AddTimePanel from './components/AddTimePanel'
import ClocksWidget from './components/ClocksWidget'
import './App.css'
import { useState } from 'react'

type ClockItem = {
  id: string
  name: string
  timezone: string
}

function App (): JSX.Element {
  const [clockList, setClockList] = useState<ClockItem[]>([])
  return (
    <>
      <AddTimePanel onClockAdd={(clock) => { setClockList((prevClocks) => [...prevClocks, clock]) }} />
      <ClocksWidget clockList={clockList} />
    </>
  )
}

export default App
export type { ClockItem }
