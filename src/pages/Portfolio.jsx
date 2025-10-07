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
         {
          img: "images/portfolio/myosop.webp",
          githubUrl: "https://github.com/Takeshwar06",
          liveUrl: "https://play.google.com/store/apps/details?id=com.myosop",
        },
        {
          img: "images/portfolio/grozzoapp.png",
          githubUrl: "https://github.com/Takeshwar06/canteen-web",
          liveUrl: "/apk/grozzo.apk",
          download: true,
        },
        {
          img: "images/portfolio/smartcanteenapp.png",
          githubUrl: "https://github.com/Takeshwar06/canteen-native-app",
          liveUrl: "/apk/smartcanteen.apk",
          download: true,
        },
        {
          img: "images/portfolio/grozzoweb.png",
          githubUrl: "https://github.com/Takeshwar06",
          liveUrl: "https://grozzo-admin-frontend.vercel.app",
        },

        {
          img: "images/portfolio/smartcanteenweb.png",
          githubUrl: "https://github.com/Takeshwar06/canteen-web",
          liveUrl: "https://smartcanteen.onrender.com",
        },
        {
          img: "images/portfolio/mybillingsystem.png",
          githubUrl: "https://github.com/Takeshwar06/billing-system",
          liveUrl: "https://billingsystem-seven.vercel.app",
        },
        {
          img: "images/portfolio/shadi.png",
          githubUrl: "https://github.com/Takeshwar06/Shaadi-Image-Hub-ui-ux",
          liveUrl: "https://shaadi-image-hub.onrender.com",
        },
        {
          img: "images/portfolio/ecommerce.png",
          githubUrl: "https://github.com/Takeshwar06/Ecommerce",
          liveUrl: "https://myecommerce-kohl.vercel.app",
        },
        {
          img: "images/portfolio/myportfolio.png",
          githubUrl: "https://github.com/Takeshwar06/my-portfolio-frontend",
          liveUrl: "https://takeshwarcrafts.onrender.com",
        },
        {
          img: "images/portfolio/chatcraze.png",
          githubUrl: "https://github.com/Takeshwar06/chat-app-frontend",
          liveUrl: "https://chatcraze.onrender.com",
        },

        {
          img: "images/portfolio/ijsrgi.png",
          githubUrl: "https://github.com/Takeshwar06/College-Journal-Web",
          liveUrl: "https://ijsrgi.com",
        },

        {
          img: "images/portfolio/skillspark.png",
          githubUrl: "https://github.com/Takeshwar06/projectUniverse-frontend",
          liveUrl: "https://skillspark.onrender.com",
        },
      ];
      setPortfolio(data);
    } else if (location.pathname === "/drawing") {
      //fetch data from backend
      const data = [
        { img: "images/drawing/drawing (3).jpg" },
        { img: "images/drawing/drawing (10).jpg" },
        { img: "images/drawing/drawing (6).jpg" },
        { img: "images/drawing/drawing (7).jpg" },
        { img: "images/drawing/drawing (2).jpg" },
        { img: "images/drawing/drawing (4).jpg" },
        { img: "images/drawing/drawing (5).jpg" },
        { img: "images/drawing/drawing (8).jpg" },
        { img: "images/drawing/drawing (9).jpg" },
      ];
      setDrawing(data);
    } else if (location.pathname === "/sketch") {
      //fetch data from backend
      const data = [
        { img: "images/sketch/sketch (10).jpg" },
        { img: "images/sketch/sketch (19).jpg" },
        { img: "images/sketch/sketch (1).jpg" },
        { img: "images/sketch/sketch (13).jpg" },
        { img: "images/sketch/sketch (11).jpg" },
        { img: "images/sketch/sketch (2).jpg" },
        { img: "images/sketch/sketch (3).jpg" },
        { img: "images/sketch/sketch (4).jpg" },
        { img: "images/sketch/sketch (6).jpg" },
        { img: "images/sketch/sketch (7).jpg" },
        { img: "images/sketch/sketch (8).jpg" },
        { img: "images/sketch/sketch (12).jpg" },
        { img: "images/sketch/sketch (16).jpg" },
        { img: "images/sketch/sketch (5).jpg" },
        { img: "images/sketch/sketch (17).jpg" },
        { img: "images/sketch/sketch (18).jpg" },
        { img: "images/sketch/sketch (9).jpg" },
      ];
      setSketch(data);
    } else if (location.pathname === "/dance") {
      //fetch data from backend
      const data = [
        {
          videoUrl:
            "https://res.cloudinary.com/do3fiil0d/video/upload/v1696514576/portfolio/dance_-_Trim2_mixr8p.mp4",
        },
        {
          videoUrl:
            "https://res.cloudinary.com/do3fiil0d/video/upload/v1696514534/portfolio/km_20220711_1080p_bcasqb.3gp",
        },
        {
          videoUrl:
            "https://res.cloudinary.com/do3fiil0d/video/upload/v1696514523/portfolio/ins_1696513335640_x6og10.mp4",
        },
        {
          videoUrl:
            "https://res.cloudinary.com/do3fiil0d/video/upload/v1696514499/portfolio/dance_-_Trim_zh0ny3.mp4",
        },
      ];
      setDance(data);
    } else if (location.pathname === "/certificate") {
      //fetch data from backend
      const data = [
        { img: "images/certificate/certificate (10).jpg" },
        { img: "images/certificate/certificate (11).jpg" },
        { img: "images/certificate/certificate (4).jpg" },
        { img: "images/certificate/certificate (2).jpg" },
        { img: "images/certificate/certificate (3).jpg" },
        { img: "images/certificate/certificate (8).jpg" },
        { img: "images/certificate/certificate (1).jpg" },
        { img: "images/certificate/certificate (12).jpg" },
        { img: "images/certificate/certificate (9).jpg" },
        { img: "images/certificate/certificate (5).jpg" },
        { img: "images/certificate/certificate (6).jpg" },
        { img: "images/certificate/certificate (7).jpg" },
      ];
      setCertificate(data);
    }
  }, [location]);
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
            <h2>
              My &nbsp;
              {location.pathname === "/portfolio" && "Last Project"}
              {location.pathname === "/drawing" && "Drawing"}
              {location.pathname === "/sketch" && "Sketch"}
              {location.pathname === "/dance" && "Dance"}
              {location.pathname === "/certificate" && "Certificate"}
              &nbsp; :
            </h2>
          </div>
        </div>
        <div className="row">
          {location.pathname === "/portfolio"
            ? portfolio.map((item) => {
                return <PortfolioItem item={item} />;
              })
            : location.pathname === "/drawing"
            ? drawing.map((item) => {
                return <ImgItem item={item} />;
              })
            : location.pathname === "/sketch"
            ? sketch.map((item) => {
                return <ImgItem item={item} />;
              })
            : location.pathname === "/certificate"
            ? certificate.map((item) => {
                return <ImgItem item={item} />;
              })
            : location.pathname === "/dance" &&
              dance.map((item) => {
                return <VideoItem item={item} />;
              })}
        </div>
      </div>
    </section>
  );
}
