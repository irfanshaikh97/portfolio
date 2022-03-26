import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Project from './components/Project';
import "./assets/font_m.ttf";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
      <Route exact path="/"  element={<Home />} />
      <Route path="/resume"  element={<Resume />} />
      <Route path="/project" element={<Project />} /> 
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
