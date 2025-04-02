import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'

// 创建根元素
const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOMClient.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
