import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { GetDetails } from './pages/details.jsx';
import { Test } from './pages/test.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/:id" element={<GetDetails/>} />
      <Route path="/test" element={<Test/>} />
    </Routes>
  </Router>
    
  </React.StrictMode>,
)
