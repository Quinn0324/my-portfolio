import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';

import Home from './pages/home';
import About from './pages/about';
import Case_study1 from './pages/casestudy1';
import Contact from './pages/contact';

function App() {
 
 return (

  <Router>
      <div className="flex flex-col min-h-screen bg-background text-neutral">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/casestudy1" element={<Case_study1 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
