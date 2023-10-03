
export default function VideoItem({ item }) {
    return (
        <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner heightfix shadow-dark">
                <div className="portfolio-img heightfix">
                   <video controls autoPlay src="https://youtu.be/dHsV56I1GwE" width={"100%"} height={"100%"}></video>
                </div>
            </div>
        </div>
    )
}