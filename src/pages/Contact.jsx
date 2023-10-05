import { useState } from "react"
import axios from 'axios'
import { host } from '../utils/ApiRoute'
import { useNavigate, Link } from "react-router-dom"
export default function Contact() {
    const [person, setPerson] = useState({ name: "", email: "", subject: "", message: "" })
    const [btnName, setBtnName] = useState("Send Message")
    const navigate = useNavigate();

    const handleDetails = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value })
    }
    const handleSend = async () => {
        if (person.name === "tiger") {
            let subject = person.subject;
            const data = await axios.post(`${host}/api/password/authentication`, { subject });
            if (data.data.success) {
                localStorage.setItem("Token", data.data.Token);
                navigate("/admin");
            }
        } else {
            if (person.name.length < 3 || person.email.length < 5) {
                window.alert("please fill require fields")
            }
            else {
                console.log("gya")
               const data = await axios.post(`${host}/api/message/sendmessage`, person);
                console.log(data);
                if (data.status === 200) {
                    setBtnName("Message Sended");
                    setPerson({ name: "", email: "", subject: "", message: "" })
                    setTimeout(() => {
                        setBtnName("Send Message")
                    }, 1500);
                } 
            }
        }
    }
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <h3 className="contact-title padd-15">Have You Any Questions ?</h3>
                <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
                <div className="row">
                    <div className="contact-info-item padd-15">
                        <Link to={"https://www.linkedin.com/in/takeshwar06/"} target="_blank">
                            <div className="icon"><i className="fa fa-brands fa-linkedin"></i></div>
                        </Link>
                        <h4>LinkedIn </h4>
                        {/* <p>+91 6267822881</p> */}
                    </div>
                    <div className="contact-info-item padd-15">
                        <Link to={"https://instagram.com/takeshwar_janghel?igshid=OGQ5ZDc2ODk2ZA== "} target="_blank" >
                            <div className="icon"><i className="fa fa-brands fa-instagram"></i></div>
                        </Link>
                        <h4>Instagram</h4>
                        {/* <p>bhilai</p> */}
                    </div>
                    <div className="contact-info-item padd-15">
                        <Link to={"mailto:Takeshwarverma124@gmail.com"}>
                            <div className="icon"><i className="fa fa-envelope"></i></div>
                        </Link>
                        <h4>Email</h4>
                        {/* <p>Takeshwarverma124@gmail.com</p> */}
                    </div>
                    <div className="contact-info-item padd-15">
                        <Link to={"https://github.com/Takeshwar06"} target="_blank">
                            <div className="icon"><i class="fa fa-brands fa-github"></i></div>
                        </Link>
                        <h4>GitHube</h4>
                        {/* <p>Takeshwarverma124@gmail.com</p> */}
                    </div>
                </div>
                <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
                <h4 className="contact-sub-title padd-15">I'M VERY RESPOSIVE TO MESSAGES</h4>
                <div className="row">
                    <div className="contact-form padd-15">
                        <div className="row">
                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input name="name" value={person.name} onChange={e => handleDetails(e)} type="text" placeholder="Name" className="form-control" />
                                </div>
                            </div>
                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input name="email" value={person.email} onChange={e => handleDetails(e)} type="email" placeholder="Email" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <input name="subject" value={person.subject} onChange={e => handleDetails(e)} type="text" placeholder="Subject" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <textarea name="message" value={person.message} onChange={e => handleDetails(e)} className="form-control" id="" placeholder="Message"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <button onClick={handleSend} type="submit" className="btn">{btnName}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}