//Xem bai nao thi mo comment bai do

//ex0
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <p>
//     Hello, <strong>JSX</strong>
//   </p>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



//ex0.1
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <button />
//     <code />
//     <input />
//     <label />
//     <p />
//     <pre />
//     <select />
//     <table />
//     <ul />
//   </div>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//ex0.2
// import * as React from 'react';
// import * as ReactDom from 'react-dom';

// const root = ReactDom.createRoot (document.getElementById('root'));

// root.render(
//   <section>
//     <header>
//       <h1>A Header</h1>
//     </header>
//     <nav>
//       <a href="item">Nav Item</a>
//     </nav>
//     <main>
//       <p>The main content...</p>
//     </main>
//     <footer>
//       <small>&copy; 2021</small>
//     </footer>
//   </section>
// )



//ex0.3
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// import MySection from "./Ex0.3-MySection";
// import MyButton from "./Ex0.3-MyButton";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <MySection>
//     <MyButton>My Button Text</MyButton>
//   </MySection>
// );



//ex0.4
// import * as React from "react";
// import * as ReactDOM from "react-dom";

// const array = ["First", "Second", "Third"];

// const object = {
//   first: 1,
//   second: 2,
//   third: 3,
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <section>
//     <h1>Array</h1>
//     <ul>
//       {array.map((i) => (
//         <li key={i}>{i}</li>
//       ))}
//     </ul>

//     <h1>Object</h1>
//     {/* <ul>
//       {Object.keys(object).map((i) => (
//         <li key={i}>
//           <strong>{i}: </strong>
//           {object(i)}
//         </li>
//       ))}
//     </ul> */}
//   </section>
// );