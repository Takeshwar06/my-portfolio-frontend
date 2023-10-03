import axios from "axios";
import { useEffect, useState } from "react"
import { host } from "../utils/ApiRoute";
import { useNavigate } from "react-router-dom";
import MessageItem from "../components/MessageItem";
export default function Admin() {

    const [message,setMessage]=useState([]);
    const [viewer,setViewer]=useState(0);
    const navigate=useNavigate();
    useEffect(()=>{
      authentication();
      fetchViewer();
      fetchMessage();
    },[])
    const authentication = async()=>{
       const data=await axios.post(`${host}/api/password/authtoken`,{
        Token:localStorage.getItem("Token")
       })
      if(!data.data.success){
        navigate("/")
      }
    }

    const fetchMessage =async()=>{
        const data=await axios.post(`${host}/api/message/getallmessage`,{
            Token:localStorage.getItem("Token"),
        })
        if(data.data.success){
            setMessage(data.data.data);
        }
    }

    const fetchViewer=async()=>{
        const data=await axios.post(`${host}/api/viewer/getallviewer`,{
            Token:localStorage.getItem("Token")
        })
        if(data.data.success){
          setViewer(data.data.data.length);
        }
    }

    const logout=()=>{
        if(window.confirm("Want to logout")){
            localStorage.removeItem("Token");
            navigate("/")
        }
    }
    return (
        <section className="service section " id="service">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2 style={{cursor:"pointer"}} onClick={logout} >Admin</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="admin-heading padd-15">
                        <h3>Message : {message.length} :: Viewer : {viewer}</h3>
                    </div>
                </div>
                <hr style={{marginTop:"12px",marginBottom:"12px"}} />
                <div className="row ">
                   {
                    message.map((item,index)=>{
                        return(<MessageItem key={index} item={item}/>)
                    })
                   }
                </div>
            </div>
        </section>
    )
}