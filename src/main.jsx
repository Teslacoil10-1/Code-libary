import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Analytics } from "@vercel/analytics/next"
document.documentElement.classList.add('dark')

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Analytics/>
  </BrowserRouter>
)

// Add favicon
const link = document.createElement('link')
link.rel = 'icon'
link.href = '/src/assets/favicon.ico'
document.head.appendChild(link)
