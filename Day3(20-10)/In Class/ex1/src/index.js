//Xem bai nao thi mo comment bai do

//ex1.0
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// import MyComponent from './Ex1.0-MyComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <MyComponent />
// );

//ex1.1
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// import MyComponent from './Ex1.1-MyComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <MyComponent />
// );

//ex1.2
// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import MyButton from "./Ex1.2-MyButton";
// import MyList from "./Ex1.2-MyList";

// const root = ReactDOM.createRoot(document.getElementById("root"));

//   const appState = {
//     text: "My Button",
//     disabled: true,
//     items: ["First", "Second", "Third"],
//   };

//   function render(props) {
//     root.render(
//       <main>
//         <MyButton text={props.text} disabled={props.disabled} />
//         <MyList items={props.items} />
//       </main>
//     );
//   }

//   render(appState);

//   setTimeout(() => {
//     appState.disabled = false;
//     appState.items.push("Fourth");

//     render(appState);
//   }, 1000);

//ex1.3
// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import MyButton from "./Ex1.3-MyButton";

// const root = ReactDOM.createRoot(document.getElementById("root"));

//   function render({second}) {
//     root.render(
//       <main>
//         <MyButton />
//         <MyButton text={second.text} disabled={second.disabled} />
//       </main>
//     );
//   }

//   render({
//     second: {
//       text: "Second Button",
//       disabled:true,
//     },
//   });