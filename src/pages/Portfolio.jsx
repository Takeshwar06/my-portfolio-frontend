import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PortfolioItem from "../components/PortfolioItem";
import ImgItem from "../components/ImgItem";
import VideoItem from "../components/VideoItem";

export default function Portfolio() {
    const [portfolio, setPortfolio] = useState([]);
    const [drawing, setDrawing] = useState([]);
    const [sketch, setSketch] = useState([]);
    const [dance, setDance] = useState([]);
    const [certificate, setCertificate] = useState([]);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/portfolio") {
            // fetch data from backend
            const data = [
                { img: "images/uuu.jpg", url: "https://www.google.com" },
                { img: "images/portfolio.jpg", url: "https://www.google.com" },
                { img: "images/portfolio.jpg", url: "https://www.google.com" },
                { img: "images/portfolio.jpg", url: "https://www.google.com" },
                { img: "images/portfolio.jpg", url: "https://www.google.com" },
                { img: "images/portfolio.jpg", url: "https://www.google.com" },
            ]
            setPortfolio(data);
        }

        else if (location.pathname === "/drawing") {
            //fetch data from backend
            const data = [
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
            ]
            setDrawing(data);
        }

        else if (location.pathname === "/sketch") {
            //fetch data from backend
            const data = [
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
            ]
            setSketch(data);
        }
        else if (location.pathname === "/dance") {
            //fetch data from backend
            const data = [
                { video: "images/uuu.jpg" },
                { video: "images/uuu.jpg" },
                { video: "images/uuu.jpg" },
                { video: "images/uuu.jpg" },
                { video: "images/uuu.jpg" },
                { video: "images/uuu.jpg" },
            ]
            setDance(data);
        }
        else if (location.pathname === "/certificate") {
            //fetch data from backend
            const data = [
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
                { img: "images/uuu.jpg" },
            ]
            setCertificate(data);
        }
    }, [location])
    return (
        <section className="portfolio section" id="portfolio">
            {/* hidden */}
            <div className="container"> 

                <div className="row">
                    <div className="section-title padd-15">
                        <h2>
                            {location.pathname === "/portfolio" && "Portfolio"}
                            {location.pathname === "/drawing" && "Drawing"}
                            {location.pathname === "/sketch" && "Sketch"}
                            {location.pathname === "/dance" && "Dance"}
                            {location.pathname === "/certificate" && "Certificate"}
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading padd-15">
                        <h2>My &nbsp;
                            {location.pathname === "/portfolio" && "Last Project"}
                            {location.pathname === "/drawing" && "Drawing"}
                            {location.pathname === "/sketch" && "Sketch"}
                            {location.pathname === "/dance" && "Dance"}
                            {location.pathname === "/certificate" && "Certificate"}
                            &nbsp; :</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        location.pathname === "/portfolio" ? portfolio.map((item) => {
                            return (<PortfolioItem item={item} />)
                        }) :

                            location.pathname === "/drawing" ? drawing.map((item) => {
                                return (<ImgItem item={item} />)
                            }) :

                                location.pathname === "/sketch" ? sketch.map((item) => {
                                    return (<ImgItem item={item} />)
                                }) :

                                    location.pathname === "/certificate" ? certificate.map((item) => {
                                        return (<ImgItem item={item} />)
                                    }) :
                                        location.pathname === "/dance" && dance.map((item) => {
                                            return (<VideoItem item={item} />)
                                        })
                    }


                </div>
            </div>
        </section>
    )
}