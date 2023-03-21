import './App.css';
import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Test } from './components/Test';

const firebaseApp = initializeApp(firebaseConfig)

function App() {
  return (
    <div className="App">
      <Test />
      <Test />
    </div>
  );
}

export default App;
