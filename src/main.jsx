import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Components/Nav'
import Form from './Components/Form'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Form />
  </React.StrictMode>,
)
