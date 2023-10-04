
import { Link } from "react-router-dom"
export default function About() {
    return (
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
                                        <p>GitHube : <span><Link to={"https://github.com/Takeshwar06"} target="_blank"> <i class="fa fa-brands fa-github"></i> </Link></span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Email : <span><Link to={"mailto:Takeshwarverma124@gmail.com"} > <i className="fa fa-envelope"></i></Link></span></p>
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
                                        <h5>HTML</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: "97%" }}></div>
                                            <div className="skill-percent">96%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h5>CSS</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: "60%" }}></div>
                                            <div className="skill-percent">60%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h5>JS</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: "90%" }}></div>
                                            <div className="skill-percent">90%</div>
                                        </div> 
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h5>REACT</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: "92%" }}></div>
                                            <div className="skill-percent">92%</div>
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
                                                    <i className="fa fa-calendar"></i>2021 - 2025
                                                </h3>
                                                <h4 className="timeline-title">College (BTech):</h4>
                                                <p className="timeline-text"><span><i class="fa-solid fa-circle-dot"></i></span>Bachelor of Technology (BTech) in Computer Science</p>
                                                <p className="timeline-text"><span><i class="fa-solid fa-circle-dot"></i></span>Rungta College Of Engineering & Technology, Bhilai</p>
                                                <p className="timeline-text"><span><i class="fa-solid fa-circle-dot"></i></span>Graduation Year: 2025</p>
                                                <p className="timeline-text"><span><i class="fa-solid fa-circle-dot"></i></span>College GPA: [Your College GPA, if applicable]</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i>2020 - 2021
                                                </h3>
                                                <h4 className="timeline-title">12th Grade (Higher Secondary School):</h4>
                                                <p className="timeline-text"><span><i class="fa-solid fa-circle-dot"></i></span>Higher Secondary Certificate (HSC)</p>
                                                <p className="timeline-text"><span><i class="fa-solid fa-circle-dot"></i></span>G.H.S. Boys School, Chhuikhadan</p>
                                                <p className="timeline-text"><span><i class="fa-solid fa-circle-dot"></i></span>Stream: Mathematics</p>
                                                <p className="timeline-text"><span><i class="fa-solid fa-circle-dot"></i></span>Percentage: 86%</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i>2018 - 2019
                                                </h3>
                                                <h4 className="timeline-title">10th Grade (Secondary School):</h4>
                                                <p className="timeline-text"><span><i class="fa-solid fa-circle-dot"></i></span>Secondary School Certificate (SSC)</p>
                                                <p className="timeline-text"><span><i class="fa-solid fa-circle-dot"></i></span>Sarswati Shishu Mandir, Chhuikhadan</p>
                                                <p className="timeline-text"><span><i class="fa-solid fa-circle-dot"></i></span>Percentage: 82.66%</p>
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
                                                    <i className="fa fa-calendar"></i>2022-2022
                                                </h3>
                                                <h4 className="timeline-title">College Hackathon:</h4>
                                                <p className="timeline-text">
                                                    Secured second place in a college hackathon with a team, building a MERN stack Canteen Management System. Gained hands-on experience in web development, Learned about web sockets and Payment Gateway integration, demonstrated problem-solving, and teamwork.
                                                </p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i>2023 - 2023
                                                </h3>
                                                <h4 className="timeline-title">Vocational Training:</h4>
                                                <p className="timeline-text">
                                                    One-month intensive web development training covered HTML, CSS, JavaScript, and responsive design. Executed a comprehensive website project showcasing proficiency in modern web technologies, igniting a passion for web development.
                                                </p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i>2021 - 2023
                                                </h3>
                                                <h4 className="timeline-title">Persnal Projects:</h4>
                                                <p className="timeline-text">
                                                    Developed personal projects, honing skills in coding, problem-solving, and project management, showcasing creativity and expertise
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