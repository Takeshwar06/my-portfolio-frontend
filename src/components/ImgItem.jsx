import { Link } from "react-router-dom"
export default function ImgItem({item}){
    return(
        <div className="portfolio-item padd-15">
            <div  className="portfolio-item-inner heightfix shadow-dark">
                <div className="portfolio-img">
                    <Link target="_blank" to={`${window.location.origin}/${item.img}`}><img src={`${item.img}`} alt="" srcset="" /></Link>
                </div>
            </div>
        </div>
    )
}