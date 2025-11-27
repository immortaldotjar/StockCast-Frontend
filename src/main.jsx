import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import TwelveDataProvider from './Context/SearchContext.jsx'
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from './Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <TwelveDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TwelveDataProvider>
    </UserProvider>
  </StrictMode>
)
