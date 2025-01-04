import './App.css'
import About from './Components/About/About';
import HeaderPage from "./Components/Header/HeaderPage";
import intro from "../src/assets/images/About-Me.jpg"
import TimeLine from './Components/TimeLine/TimeLine';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Counter from './Components/Counter/Counter';
import Contact from './Components/Contact/Contact';

function App() {

  return (
    <>
    <HeaderPage />
    <About image={intro}/>
    <TimeLine />
    <Portfolio />
    <Services />
    <Counter />
    <Contact />
    </>
  )
}

export default App
