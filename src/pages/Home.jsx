import { useEffect, useRef } from "react";
import Typed from 'typed.js';

export default function Home(){
    const typedRef = useRef(null);

    useEffect(() => {
      const options = {
        strings: ["Web Developer"," ", "Web Designer", "Coder", "Programmer"],
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
                    <img src="images/tiger.jpeg" alt=""/>
                </div>
                <div className="home-info padd-15">
                    <h3 className="hello">Hello, my name is <span className="name">Takeshwar Janghel</span></h3>
                    <h3 className="my-profession">I' m a <span ref={typedRef} className="typing">full stack devloper</span> </h3>
                    <p>I'm a full stack devloper with extensive expresif Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Harum laborum nostrum repudiandae more...</p>
                    <a href="#contact" className="btn hire-me">Hire Me</a>
                </div>
                <div className="home-img padd-15" id="home-img">
                    <img src="images/tiger.jpeg" alt=""/>
                </div>
            </div>
        </div>
    </section>
    )
}