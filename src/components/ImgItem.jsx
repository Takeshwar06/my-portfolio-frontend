export default function ImgItem({item}){
    return(
        <div className="portfolio-item padd-15">
            <div  className="portfolio-item-inner heightfix shadow-dark">
                <div className="portfolio-img">
                     <img src={`${item.img}`} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}