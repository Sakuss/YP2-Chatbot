import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

import NavBar from './Navbar'
import ChatBot from './ChatBot'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ChatBot/>
        <NavBar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
