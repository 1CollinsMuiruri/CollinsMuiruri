import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DynamicListApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DynamicListApp />
  </StrictMode>,
)
