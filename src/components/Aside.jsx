import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="aside">
            <div className="logo">
                <a href="#"><span>T</span>akeshwar</a>
            </div>
            <div className="nav-toggler">
                <span></span>
            </div>
            <ul className="nav">
                <li><Link to={"/"} className="active"><i className="fa fa-home"></i>Home</Link></li>
                <li><Link to={"/about"}><i className="fa fa-user"></i>About</Link></li>
                <li><Link to={"/services"}><i className="fa fa-list"></i>Services</Link></li>
                <li><Link to={"/portfolio"}><i className="fa fa-briefcase"></i>Portfolio</Link></li>
                <li><Link to={"contact"}><i className="fa fa-comments"></i>Contact</Link></li>
            </ul>
        </div>
    )
}