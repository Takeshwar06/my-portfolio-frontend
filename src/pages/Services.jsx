import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ServiceItem from "../components/ServiceItem";
import SkillsItem from "../components/SkillsItem";

export default function Services(){
    const [service,serService]=useState([])
    const [skill,setSkill]=useState([])
    const [code,setCode]=useState([])
    const location=useLocation();
    useEffect(()=>{
     if(location.pathname==="/services"){
        const data=[
            {icon:"fa-mobile-alt",name:"We Design",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequuntur laborum corrupti!"},
            {icon:"fa-laptop-code",name:"Web Design",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequuntur laborum corrupti!"},
            {icon:"fa-palette",name:"Web Design",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequuntur laborum corrupti!"},
            {icon:"fa-code",name:"Web Design",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequuntur laborum corrupti!"},
            {icon:"fa-search",name:"Web Design",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequuntur laborum corrupti!"},
            {icon:"fa-bullhorn",name:"Web Design",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequuntur laborum corrupti!"},
        ]
        serService(data);
     }

     else if(location.pathname==="/skills"){
        const data=[
            {logo:"/images/tiger.jpg",name:"Coding",navigation:"/code",about:"Lorem ipsum dolor sit amet consectetur"},
            {logo:"/images/tiger.jpg",name:"Drawing",navigation:"/drawing",about:"Lorem ipsum dolor sit amet consectetur"},
            {logo:"/images/tiger.jpg",name:"Sketch",navigation:"/sketch",about:"Lorem ipsum dolor sit amet consectetur"},
            {logo:"/images/tiger.jpg",name:"Certificate",navigation:"/certificate",about:"Lorem ipsum dolor sit amet consectetur"},
            {logo:"/images/tiger.jpg",name:"Dance",navigation:"/dance",about:"Lorem ipsum dolor sit amet consectetur"},
            {logo:"/images/tiger.jpg",name:"Defalut",navigation:"#",about:"Lorem ipsum dolor sit amet consectetur"},
        ]
        setSkill(data);
     }

     else if(location.pathname==="/code"){
        // fetch data from backend
     }
    },[location])
    return(
        <section className="service section " id="service">
        <div className="container">
            <div className="row">
                <div className="section-title padd-15">
                    <h2>
                        {location.pathname==="/services"&&"Services"}
                        {location.pathname==="/skills"&&"Skills & Hobbies"}
                        {location.pathname==="/code"&&"Coding"}
                    </h2>
                </div>
            </div>
            <div className="row">
               {
                location.pathname==="/services"?service.map((item)=>{
                    return(<ServiceItem item={item}/>)
                }):
                
                location.pathname==="/skills"?skill.map((item)=>{
                    return(<SkillsItem item={item} location={location}/>)
                }):

                location.pathname==="/code"&&code.map((item)=>{
                    return(<SkillsItem item={item} location={location}/>)
                })
               }
            </div>
        </div>
    </section>
    )
}