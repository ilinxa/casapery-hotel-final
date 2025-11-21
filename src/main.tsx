import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { LanguageProvider } from './context/LanguageContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <div className='overflow-x-hidden'>

      <App  />
      </div>

    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
