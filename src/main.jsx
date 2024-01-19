import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browser from './components/Browser.jsx'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore.js'
import Login from './components/Login.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
      path:"/",
      element:<Login />
      },
      {
        path:"/browser",
        element:<Browser />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
