import { Link } from "react-router-dom";

export default function PortfolioItem({ item }) {
  return (
    <div className="portfolio-item padd-15">
      <div className="portfolio-item-inner shadow-dark">
        <div className="portfolio-img" style={{ position: "relative" }}>
          <img src={`${item.img}`} alt="" />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              position: "absolute",
              bottom: 0,
              right: 0,
              padding: "10px",
            }}
          >
            <Link
              to={item.githubUrl}
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                color: "#fff",
                fontSize: "10px", // Smaller font size
                padding: "3px 8px", // Smaller padding
                border: "1px solid #28a745", // Green border for GitHub
                borderRadius: "5px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#fff";
                e.target.style.backgroundColor = "green";
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#fff";
                e.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                e.target.style.transform = "scale(1)";
              }}
            >
              <i
                className="fa fa-brands fa-github"
                style={{ marginRight: "5px" }}
              ></i>
              Code
            </Link>

            <Link
              to={
                item.download
                  ? `${window.location.origin}${item.liveUrl}`
                  : item.liveUrl
              }
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                color: "#fff",
                fontSize: "10px", // Smaller font size
                padding: "3px 8px", // Smaller padding
                border: "1px solid #dc3545", // Red border for Live link
                borderRadius: "5px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#fff";
                e.target.style.backgroundColor = "red";
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#fff";
                e.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                e.target.style.transform = "scale(1)";
              }}
            >
              <i
                className="fa fa-line-chart"
                aria-hidden="true"
                style={{ marginRight: "5px" }}
              ></i>
              Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
