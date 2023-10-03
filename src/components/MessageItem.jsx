import { useNavigate } from "react-router-dom"

export default function MessageItem({item}){
    console.log(item);
    const navigate=useNavigate();
    return(
        <div className="service-item padd-15">
            <div className="service-item-inner">
                <h4 style={{textDecoration:"underline",textTransform:"capitalize"}}>{item.name}</h4>
                
                <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                  <p>Email: {item.email}</p>
                  <p>Subject: {item.subject}</p>
                  <p>Message: {item.message} </p>
                  <p>Date: {item.date.substring(0,10)}</p>
                </div>
               
            </div>
        </div>
    )
}