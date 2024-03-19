import { useState } from 'react'
import MiApi from './components/MiApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container-fluid vw-100 vh-100'> 
    <MiApi/>
    </div>
    </>
  )
}

export default App
