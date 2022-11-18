//Exercise 1
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import EX1component from "./Components/EX1component";
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <Router>
//     <Routes>
//     <Route path="/" element={<EX1component />} />
//     </Routes>
//   </Router>
// );

// reportWebVitals();


//Exercise 3, 4, 5, 6, 7
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

