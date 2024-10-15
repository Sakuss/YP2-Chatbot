import { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { storeMockToken, clearSessionOnUnload } from './SessionManagement'

import NavBar from './Navbar'
import ChatBot from './ChatBot'


const App = () => {
  useEffect(() => {
    const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    storeMockToken(mockToken);
    clearSessionOnUnload();

  }, []);

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
