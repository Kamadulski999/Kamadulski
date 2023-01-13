import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />      
        <Route
          path="/About"
          element={<About/>}
        />
        <Route
          path="/Projects"
          element={<Projects/>}
        />
        <Route
          path="/Skills"
          element={<Skills/>}
        />        
         <Route
          path="/Contact"
          element={<Contact/>}
        /> 
      </Routes>
    </Router>
  );
}

export default App;
