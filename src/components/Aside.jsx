import { Link, useLocation } from "react-router-dom";


export default function Home({isAsideOpen,setIsAsideOpen}) {
    const location= useLocation();
    return (
        <div className={`aside ${isAsideOpen?"aside-open":""} `}>
            <div className="logo">
                <Link href="#"><span>T</span>akeshwar</Link>
            </div>
            <div className="nav-toggler">
                <span></span>
            </div>
            <ul onClick={()=>setIsAsideOpen(false)} className="nav">
                <li><Link to={"/"} className={location.pathname==="/"?"active":""}><i className="fa fa-home"></i>Home</Link></li>
                <li><Link to={"/about"} className={location.pathname==="/about"?"active":""}><i className="fa fa-user"></i>About</Link></li>
                <li><Link to={"/services"} className={location.pathname==="/services"?"active":""}><i className="fa fa-list"></i>Services</Link></li>
                <li><Link to={"/portfolio"} className={location.pathname==="/portfolio"?"active":""}><i className="fa fa-briefcase"></i>Portfolio</Link></li>
                <li><Link to={"/skills"} className={location.pathname==="/skills"?"active":""}><i className="fa fa-briefcase"></i>Skills</Link></li>
                <li><Link to={"/contact"} className={location.pathname==="/contact"?"active":""}><i className="fa fa-comments"></i>Contact</Link></li>
            </ul>
        </div>
    )
}