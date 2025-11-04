import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';

function App() {
 
 return (
  <><div className="font-sans">
     <Navbar />
     <Hero />
   </div><div className="App">
       <h1 className="text-3xl font-bold text-blue-900">Tailwind Works!</h1>
     </div></>
  );
}

export default App;
