import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom'
import App from './App'
import Home from './view/Home/Home'
import CardForm from './Components/CardForm/CardForm'
import Error from './view/Error'
import AddCard from './view/Addcard/Addcard'
const router = createBrowserRouter([
  {
    path: '/',
    element: < Home />,
    errorElement: < Error />   
  },

  {
    path: '/add',
    element: < AddCard />
  },
  {
    path: '/app',
    element: < App />
  },
  {
    path: '/add/form',
    element: < CardForm />
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
