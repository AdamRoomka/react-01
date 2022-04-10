import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Home from "./components/Home";
// 1 Tema
import Tema1 from "./components/Tema1";

// 2 Tema
import Tema2 from "./components/Tema2";
import Profiles from "./components/Tema2/Praktika7/users/Profiles";
import Button from "./components/Tema2/Praktika1/Button";

// 3 Tema
import Tema3 from "./components/Tema3";

// Error
import ErrorPages from "./components/ErrorPages";


function App() {
  return(
    <>


    <Router>

      <nav className="text-decoration-none">
        <Link to="/"> <button className="btn btn-success m-2 offset-1"> Home </button></Link>
        <Link to="/Tema1"> <button className="btn btn-success m-2 offset-1"> Tema 1 </button></Link>
        <Link to="/Tema2"> <button className="btn btn-success m-2 offset-1"> Tema 2 </button></Link>
        <Link to="/Tema3"> <button className="btn btn-success m-2 offset-1"> Tema 3 </button></Link>
      </nav>

      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Tema1" element={<Tema1 />} />
        <Route path="/Tema2" element={<Tema2 />} />
        <Route path="/Tema2/profile/:login" element={<Profiles />} />
        <Route path="/Tema3" element={<Tema3 />} />
        <Route path="./Button" element={<Button />} />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
