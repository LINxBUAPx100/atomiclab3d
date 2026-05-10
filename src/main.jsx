import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx' 
import './index.css' // ¡Esta línea es la que conecta todo el diseño!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)