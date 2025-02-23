import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Destination from "./Pages/Destination";
import Home from "./Pages/Home";
import Accommondation from "./Pages/Accommondation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
      <div>
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Accommondation" element={<Accommondation />}/>
        </Routes>
        </Router>
        
      </div>
    
  
  );
}

export default App;
