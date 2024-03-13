import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Segments from './components/Segments';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar/>
        <Home/>
        <Segments/>
       
      </header>
    </div>
  );
}

export default App;
