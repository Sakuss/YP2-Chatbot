import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import ChatBot from './ChatBot'
import Page1 from './Page1.jsx'
import Page2 from './Page2.jsx'
import NavBar from './Navbar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "navbar",
        element: <NavBar/>
      },
      {
        path: "page1",
        element: <Page1/>
      },
      {
        path: "page2",
        element: <Page2/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
