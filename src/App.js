import './App.css';
import About from './components/About/About';
import Card from './components/Card/Card';
import Mainpage from './components/Mainpage/Mainpage';
import Navbar from './components/Navbar/Navbar';
import Work from './components/Work.js/Work';

function App() {
  return (
    <>
    <div id="landing_page">
    <Navbar/>
    <Mainpage/>
    </div>
    <About/>
    <Work/>
    {/* <Card/> */}
    </>
  );
}

export default App;
