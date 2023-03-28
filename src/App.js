import './App.css';
import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app';
import { Test } from './components/Test';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

const firebaseApp = initializeApp(firebaseConfig)

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
