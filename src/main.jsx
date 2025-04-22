import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router'
import GlobalProvider from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <GlobalProvider>
    <App />
      </GlobalProvider>
          </BrowserRouter>
  </StrictMode>,
)
