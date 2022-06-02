import React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  NavLink,
} from "react-router-dom";
import Store from "./Store";

// import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1> Welcome </h1>
      <Router>
        <p>{/* <Link to="/home">Home</Link> */}</p>
        {/* used P tag to put the links on the same line slide 229 
        DO NOT a tags for links it will make the page reload also when you inspect on the web page they will all show a tags not LINK tags*/}

        {/* <Link to="/about"> *About</Link> */}

        {/* Nav links slide 230  they add a active CSS Class THIS IS ONLY USEFUL FOR CSS PURPOSES */}
        <NavLink to="/home"> Home</NavLink>
        <NavLink to="/about"> *About</NavLink>
        <NavLink to="/store"> Store</NavLink>

        {/* STORES EXAMPLE Slide 232 & 233 MUST DO!!! */}
        <NavLink to="/store/111"> Store 111</NavLink>
        <NavLink to="/store/222"> Store 222</NavLink>
        <NavLink to="/store/333"> Store 333</NavLink>

        {/* search navlink  THINK OF IT LIKE EXPRESS/POSTMAN ?*/}
        <NavLink to="/store/555?color=blue"> Store 555</NavLink>

        {/* REMEMBER TO CREATE A ROUTE like BELOW!! */}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store/:id" element={<Store />} />

          {/* <Route path="*" element={<Navigate to="/home" />} /> */}

          {/* Above ^ makes it where you can type in anything in the address bar it will still go to the home page EX http://localhost:3000/bruh */}
        </Routes>
      </Router>

      {/* <Home/>
      <About/>   */}
    </div>
  );
}

export default App;
