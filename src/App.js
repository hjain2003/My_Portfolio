import './App.css';
import About from './components/About/About';
import Mainpage from './components/Mainpage/Mainpage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <div id="landing_page">
    <Navbar/>
    <Mainpage/>
    </div>
    <About/>
    </>
  );
}

export default App;
