import './App.css';
import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { test } from './components/test';

const firebaseApp = initializeApp(firebaseConfig)

function App() {
  return (
    <div className="App">
      <test />
      <test />
    </div>
  );
}

export default App;
