import React from 'react'
import ReactDOM from 'react-dom/client'
import Listing from './components/Listing/Listing.tsx'
import jsonData from './data/esty.json';
import './main.css'

const data = JSON.parse(JSON.stringify(jsonData));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Listing items={data} />
  </React.StrictMode>,
)
