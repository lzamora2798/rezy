import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/Home';
import Scan from './scan/Scan';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/step1' element={<Scan />} ></Route>
        <Route path='/step2' element={<Scan />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
reportWebVitals();
