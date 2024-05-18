import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StoreApp } from './StoreApp'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <StoreApp/>
    </BrowserRouter>
  // </React.StrictMode>,
)
