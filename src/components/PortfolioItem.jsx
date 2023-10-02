import { Link } from "react-router-dom";

export default function PortfolioItem({item}) {
    return (
        <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                    <Link to={`${item.url}`} target="_blank"> <img src={`${item.img}`} alt="" srcset="" /></Link>
                </div>
            </div>
        </div>
    )
}