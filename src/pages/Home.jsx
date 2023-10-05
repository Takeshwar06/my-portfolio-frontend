import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from 'typed.js';

export default function Home(){
    const typedRef = useRef(null);

    useEffect(() => {
      const options = {
        strings: ["Full Stack", "Developer", "Programmer","Web", "Developer"],
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 25, // backspacing speed in milliseconds
        loop: true, // loop the animation
      };
  
      // Initialize Typed.js
      const typed = new Typed(typedRef.current, options);
  
      // Cleanup function to destroy Typed instance when component unmounts
      return () => {
        typed.destroy();
      };
    }, []);
  
    return(
        <section className="home section " id="home">
        <div className="container">
            <div className="row">
                <div className="home-img padd-15" id="upper-img">
                    <img src="images/tiger.jpg" alt=""/>
                </div>
                <div className="home-info padd-15">
                    <h3 className="hello">Hello, my name is <span className="name">Takeshwar Janghel</span></h3>
                    <h3 className="my-profession">I' m a <span ref={typedRef} className="typing">full stack devloper</span> </h3>
                    <p>I'm Takeshwar, a B.Tech student who loves to code and create. I specialize in full-stack development,  where I transform ideas into  applications by mastering both front-end and back-end technologies, Coding isn't just a skill for me; it's a passion. </p>
                    <Link to={"mailto:Takeshwarverma124@gmail.com"}className="btn hire-me">Hire Me</Link>
                </div>
                <div className="home-img padd-15" id="home-img">
                    <img src="images/tiger.jpg" alt=""/>
                </div>
            </div>
        </div>
    </section>
    )
}