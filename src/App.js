import React from 'react'
import Homepage from './pages/homepage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Routes , Route, BrowserRouter } from "react-router-dom"
import ListingPage from './pages/listing';
import Login from './pages/login';
import Signup from './pages/signup';
import Header from './components/inc/Header';
function App() {
  return (
    <>
        {/* <Homepage/> */}
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Homepage/> } />
            <Route path="/listing" element={<ListingPage/> } />
            <Route path="/login" element={<Login/> } />
            <Route path="/signup" element={<Signup/> } />
        </Routes>
        </BrowserRouter>
        </>
  )
}
export default App
// import React from "react";
// import Homepage from "./pages/homepage";
// import Listing from "./pages/listing";
// import Login from "./pages/login";
// import Signup from "./pages/signup";
// import Loggin from "./components/LoginBody";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";

// import "bootstrap/dist/css/bootstrap.css";
// function App() {
//   return (
//     <div>
//       <Router>
//         <Switch>
//           <Route  path="/home" component={Homepage}>
//             <Route exact path="/login" component={Loggin} />
//             <Route index component={Listing} />
//             <Route path="/signup" component={Signup} />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;


