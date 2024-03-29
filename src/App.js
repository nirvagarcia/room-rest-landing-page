import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Lambders from './components/Lambders';
import Navbar from './components/Navbar';
import Segments from './components/Segments';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar/>
        <Home/>
        <Segments/>    
        <Lambders/>
        <Footer/>
       
      </header>
    </div>
  );
}

export default App;
