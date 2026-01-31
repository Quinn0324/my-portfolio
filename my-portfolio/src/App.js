import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Loading from './components/Loading.jsx';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const MyWork = lazy(() => import('./pages/mywork'));
const Contact = lazy(() => import('./pages/contact'));
const StyleGuide = lazy(() => import('./pages/style-guide'));
const CaseStudy1 = lazy(() => import('./pages/casestudy1'));
const CaseStudy2 = lazy(() => import('./pages/casestudy2'));

// Configure loading duration (in milliseconds)
const LOADING_DURATION = 3000; // 2 seconds

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
 
  useEffect(() => {
    // Start fade-out 300ms before hiding
    const fadeTimer = setTimeout(() => setIsFading(true), LOADING_DURATION - 500);
    // Then hide the loading screen
    const hideTimer = setTimeout(() => setIsLoading(false), LOADING_DURATION);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

 return (
  <>
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-neutral">
        {isLoading && <Loading message="Designed & Coded By" isFading={isFading} />}
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading message="Loading page..." />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/mywork" element={<MyWork />} />
              <Route path="/casestudy1" element={<CaseStudy1 />} />
              <Route path="/casestudy2" element={<CaseStudy2 />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/style-guide" element={<StyleGuide />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  </>
 );
}

export default App;
