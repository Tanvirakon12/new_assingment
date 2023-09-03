import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StepContext from './hooks/StepContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StepContext>
        <App />
      </StepContext>
    </BrowserRouter>
  </React.StrictMode>,
)