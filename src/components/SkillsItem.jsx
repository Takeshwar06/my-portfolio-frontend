import { useNavigate } from "react-router-dom"

export default function SkillsItem({item,location}){
    const navigate=useNavigate();
    return(
        <div className="service-item padd-15">
            <div className="service-item-inner">
                <div className="skill-logo">
                   <img src={`${item.logo}`} alt="" />
                </div>
                <h4>{item.name}</h4>
                <p>{item.about}</p>
                {location.pathname==="/skills"&&<button className="skill-btn " 
                onClick={()=>navigate(`${item.navigation}`)}
                >Go</button>}
            </div>
        </div>
    )
}