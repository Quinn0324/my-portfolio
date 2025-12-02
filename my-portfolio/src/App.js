import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

import Home from './pages/home';
import About from './pages/about';
import CaseStudy1 from './pages/casestudy1';
import Contact from './pages/contact';
import StyleGuide from './pages/style-guide';

function App() {
 
 return (

  <Router>
      <div className="flex flex-col min-h-screen bg-background text-neutral">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/casestudy1" element={<CaseStudy1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/style-guide" element={<StyleGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
