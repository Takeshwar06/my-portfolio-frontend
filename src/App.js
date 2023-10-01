import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aside from './components/Aside'
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { useEffect, useState } from 'react';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [activeStyle,setActiveStyle]=useState("first");

  useEffect(() => {
    const handleScroll = () => {
     if(isThemeOpen===true){
        setIsThemeOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);
const themeToggler=(color)=>{
document.querySelector(".main-container").classList.remove('first')
document.querySelector(".main-container").classList.remove('seccond')
document.querySelector(".main-container").classList.remove('third')
document.querySelector(".main-container").classList.remove('fourth')
document.querySelector(".main-container").classList.remove('fifth')
document.querySelector(".main-container").classList.add(color)
setActiveStyle(color);
}
  return (
    <Router>
      <div onClick={()=>setIsThemeOpen(false)} className={`main-container first ${isDarkMode && "dark"}`}>
        <Aside />
        <div className="main-content">
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/services' element={<Services />}></Route>
            <Route exact path='/portfolio' element={<Portfolio />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
      <div className={`style-switcher ${isThemeOpen && "open"}`}>
        <div onClick={() => setIsThemeOpen(!isThemeOpen)} className="style-switcher-toggler s-icon">
          <i className="fas fa-cog fa-spin"></i>
        </div>
        <div onClick={() => setIsDarkMode(!isDarkMode)} className="day-night s-icon">
          <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"} `}></i>
        </div>
        <h4>Theme Colors</h4>
        <div className="colors">
          <span className="color-1" onClick={()=>themeToggler("first")}></span>
          <span className="color-2" onClick={()=>themeToggler("seccond")}></span>
          <span className="color-3" onClick={()=>themeToggler("third")}></span>
          <span className="color-4" onClick={()=>themeToggler("fourth")}></span>
          <span className="color-5" onClick={()=>themeToggler("fifth")}></span>
        </div>
      </div>
    </Router>
  );
}

export default App;
