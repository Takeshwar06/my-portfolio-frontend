export default function Contact(){
    return(
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
                    <div className="icon"><i className="fa fa-phone"></i></div>
                    <h4>Call Us On</h4>
                    <p>+91 6267822881</p>
                </div>
                 <div className="contact-info-item padd-15">
                    <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                    <h4>Office</h4>
                    <p>bhilai</p>
                </div>
                 <div className="contact-info-item padd-15">
                    <div className="icon"><i className="fa fa-envelope"></i></div>
                    <h4>Email</h4>
                    <p>Takeshwarverma124@gmail.com</p>
                </div>
                 <div className="contact-info-item padd-15">
                    <div className="icon"><i className="fa fa-globe-europe"></i></div>
                    <h4>Website</h4>
                    <p>www.google.com</p>
                </div>
            </div>
            <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
            <h4 className="contact-sub-title padd-15">I'M VERY RESPOSIVE TO MESSAGES</h4>
            <div className="row">
                <div className="contact-form padd-15">
                    <div className="row">
                        <div className="form-item col-6 padd-15">
                            <div className="form-group">
                                <input type="text" placeholder="Name" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-item col-6 padd-15">
                            <div className="form-group">
                                <input type="email" placeholder="Email" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-item col-12 padd-15">
                            <div className="form-group">
                                <input type="text" placeholder="Subject" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-item col-12 padd-15">
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" placeholder="Message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-item col-12 padd-15">
                            <button type="submit" className="btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}