
import './App.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import Hero from './components/Hero.jsx';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

const navbarLinks = [
  { url: "#", title: "Home"},
  { url: "#", title: "Trips"},
  { url: "#", title: "About"},
]

function App() {
  return (
    <div className="App">
    <Navbar navbarLinks={navbarLinks} />
     <Hero imageSrc={img1} />
     <Slider imageSrc={img2} title={"Explora el mundo"} subtitle={"<<Life is either a daring adventure or nothing at all>>"}/>
     <Slider imageSrc={img3} title={"Explora el mundo"} subtitle={"<<Life moves pretty fast. If you don’t stop and look around for a while, you could miss it.>>"} flipped={true}/>
    </div>
  );
}

export default App;

