
import { Link } from "react-router-dom"
export default function About(){
    return(
        <section className="about section " id="about">
        <div className="container">
            <div className="row">
                <div className="section-title padd-15">
                    <h2>About Me</h2>
                </div>
            </div>
            <div className="row">
                <div className="about-content padd-15">
                    <div className="row">
                        <div className="about-text padd-15">
                            <h3>I'm Takeshwar and <span>Full stack devloper</span> </h3>
                            <p>Coding isn't just a skill for me; it's my passion. I enjoy solving problems, whether it's fixing code issues or finding creative solutions to real-world challenges. Besides coding, I have a talent for sketching, adding an artistic touch to my creative journey.</p>
                             <p>Explore my portfolio, where technology and art come together to shape a brighter future. Join me on this adventure, and let's make something amazing together.</p>
                        </div>
                    </div>
                     <div className="row">
                        <div className="personal-info padd-15">
                            <div className="row">
                                <div className="info-item padd-15">
                                    <p>Birthday : <span>15 Augst 2002</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Age : <span>21</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Website : <span>www.tiger.com</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Email : <span>Takeshwarverma124@gmail.com</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Degree : <span>Btech CSE</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Phone : <span>62678*****</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>City : <span>Bhilai</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Freelance : <span>Bhilai</span></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="buttons padd-15">
                                    <Link target="_blank" download to={`${window.location.origin}/resume/takeshwarResume.pdf`} className="btn">Download CV</Link>
                                    <Link target="_blank" to="https://instagram.com/takeshwar_janghel?igshid=OGQ5ZDc2ODk2ZA==" className="btn hire-me">Hire Me</Link>
                                </div>
                            </div>
                        </div>
                        <div className="skills padd-15">
                            <div className="row">
                                <div className="skill-item padd-15">
                                    <h5>CSS</h5>
                                    <div className="progress">
                                        <div className="progress-in" style={{width:"76%"}}></div>
                                        <div className="skill-percent">76%</div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>JS</h5>
                                    <div className="progress">
                                        <div className="progress-in" style={{width:"76%"}}></div>
                                        <div className="skill-percent">96%</div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>React</h5>
                                    <div className="progress">
                                        <div className="progress-in" style={{width:"76%"}}></div>
                                        <div className="skill-percent">86%</div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>HTML</h5>
                                    <div className="progress">
                                        <div className="progress-in" style={{width:"76%"}}></div>
                                        <div className="skill-percent">96%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="education padd-15">
                            <h3 className="title">Education</h3>
                            <div className="row">
                                <div className="timeline-box padd-15">
                                    <div className="timeline shadow-dark">
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date">
                                                <i className="fa fa-calendar"></i>2012 - 1223
                                            </h3>
                                            <h4 className="timeline-title">master in computer science</h4>
                                            <p className="timeline-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero explicabo atque nihil fugit, aut harum quia est iste ullam voluptatem?
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date">
                                                <i className="fa fa-calendar"></i>2012 - 1223
                                            </h3>
                                            <h4 className="timeline-title">master in computer science</h4>
                                            <p className="timeline-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero explicabo atque nihil fugit, aut harum quia est iste ullam voluptatem?
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date">
                                                <i className="fa fa-calendar"></i>2012 - 1223
                                            </h3>
                                            <h4 className="timeline-title">master in computer science</h4>
                                            <p className="timeline-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero explicabo atque nihil fugit, aut harum quia est iste ullam voluptatem?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="experience padd-15">
                            <h3 className="title">Experience</h3>
                            <div className="row">
                                <div className="timeline-box padd-15">
                                    <div className="timeline shadow-dark">
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date">
                                                <i className="fa fa-calendar"></i>2012 - 1223
                                            </h3>
                                            <h4 className="timeline-title">master in computer science</h4>
                                            <p className="timeline-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero explicabo atque nihil fugit, aut harum quia est iste ullam voluptatem?
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date">
                                                <i className="fa fa-calendar"></i>2012 - 1223
                                            </h3>
                                            <h4 className="timeline-title">master in computer science</h4>
                                            <p className="timeline-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero explicabo atque nihil fugit, aut harum quia est iste ullam voluptatem?
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date">
                                                <i className="fa fa-calendar"></i>2012 - 1223
                                            </h3>
                                            <h4 className="timeline-title">master in computer science</h4>
                                            <p className="timeline-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero explicabo atque nihil fugit, aut harum quia est iste ullam voluptatem?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}