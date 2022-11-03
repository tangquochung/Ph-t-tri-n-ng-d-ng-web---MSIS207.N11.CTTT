//Exercise 3
// import React from 'react';
// import './App.css';

// function App(){
//   const [EX1component, setEX1component] = React.useState(() => () => null);

//   React.useEffect(() => {
//     import("./Components/EX1component").then((module) => {
//       setHW1component(() => module.default);
//     });
//   }, []);
//   return <HW1component />
// }

// export default App;


//Excercise 4
// import React from "react";

// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id:1, name: "Hung"});
//     }, 1000);
//   });
// }

// function App() {
//   const [id, setId] = React.useState("loading...");
//   const [name, setName] = React.useState("loading...");

//   React.useEffect(() => {
//     fetchUser().then((user) => {
//       setId(user.id);
//       setName(user.name);
//     });
//   });

//   return (
//     <>
//      <p>ID: {id} </p>
//      <p>Name: {name}</p>
//     </>
//   );
// }
// export default App;


//Exercise 5
// import React from "react";
// import ClipLoader from "react-spinners/ClipLoader";
// import EX5MyPage from "./Components/EX5MyPage";

// function App() {
//   return (
//     <React.Suspense fallback={<ClipLoader color={"lightblue"} size={150} />}>
//       <EX5MyPage />
//     </React.Suspense>
//   );
// }

// export default App;


//Exercise 6
// import "typeface-roboto";
// import React from "react";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";

// const headerFooterStyle = {
//   padding: 8,
//   textAlign: "center",
// };

// const mainStyle = {
//   padding: 16,
//   textAlign: "center",
// };

// const navStyle = {marginLeft: 5};
// export default function App() {
//   return(
//     <div style={{ flexGrow: 1}}>
//     <Grid container spacing={3}>
//      <Grid item xs={12}>
//       <Paper style={headerFooterStyle}>
//        <Typography>Header</Typography>
//       </Paper>
//     </Grid>
//     <Grid item xs={4}>
//      <Paper>
//       <Grid container spacing={2} direction="column">
//        <Grid item xs="12">
//         <Typography style={navStyle}>Nav Item 1</Typography>
//        </Grid>
//        <Grid item xs={12}>
//         <Typography style={navStyle}>Nav Item 2</Typography>
//        </Grid>
//        <Grid item xs={12}>
//         <Typography style={navStyle}>Nav Item 3</Typography>
//        </Grid>
//        <Grid item xs={12}>
//         <Typography style={navStyle}>Nav Item 4</Typography>
//        </Grid>
//       </Grid>
//      </Paper>
//     </Grid>
//     <Grid item xs={8}>
//      <Grid container spacing={2}>
//       <Grid item xs={6}>
//        <Paper style={mainStyle}>
//         <Typography>Main Content 1</Typography>
//        </Paper>
//       </Grid>
//       <Grid item xs={6}>
//        <Paper style={mainStyle}>
//         <Typography>Main Content 2</Typography>
//        </Paper>
//       </Grid>
//       <Grid item xs={6}>
//        <Paper style={mainStyle}>
//         <Typography>Main Content 3</Typography>
//        </Paper>
//       </Grid>
//       <Grid item xs={6}>
//        <Paper style={mainStyle}>
//         <Typography>Main Content 4</Typography>
//        </Paper>
//       </Grid>
//      </Grid>
//     </Grid>
//     <Grid item xs={12}>
//      <Paper style={headerFooterStyle}>
//       <Typography>Footer</Typography>
//      </Paper>
//     </Grid>
//    </Grid>
//   </div>
//   )
// }

//Exercise 7
import "typeface-roboto";
import React, {useState} from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import First from "./Components/EX7First";
import Second from "./Components/EX7Second";
import Third from "./Components/EX7Third";

