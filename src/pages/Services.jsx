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
            {icon:"fa-laptop-code",name:"Web Development",about:"Full stack Web development with expertise in front-end and back-end technologies,Proficiency in HTML, CSS, JavaScript, Python."},
            {icon:"fa-mobile-alt",name:"App Development",about:"iOS & Android platforms,including cross-platform solutions,Utilization of modern technologies and frameworks,such as React Native"},
            {icon:"fa-brands fa-react",name:"React Developement",about:"Skilled in creating dynamic web apps with React.js. SPAs, PWAs,Customization and optimization of React components for your unique needs"},
            {icon:"fa-brands fa-node-js",name:"NodeJs Development",about:"Server-side expertise in RESTful APIs, real-time apps, and scalable, high-performance Node.js solutions with serverless architecture experience"},
            {icon:"fa-code",name:"Programming",about:"Strong programming skills in various languages,Custom software development to solve complex problems,Crafting efficient and reliable solutions."},
            {icon:"fa-palette",name:"Web Design",about:"Crafting user-centric website designs, utilizing frameworks like Bootstrap and ensuring alignment with your specific user experience and effective web solutions"},
        ]
        serService(data);
     }

     else if(location.pathname==="/skills"){
        const data=[
            {logo:"/images/skills/code.png",name:"Technical",navigation:"/code",about:" Proficient in multiple languages, I'm dedicated to continuous learning about tech, fueled by my coding passion."},
            {logo:"/images/skills/drawing.png",name:"Drawing",navigation:"/drawing",about:"I express my creativity through brush and color, creating vibrant and imaginative artworks that showcase my love for painting"},
            {logo:"/images/skills/sketch2.png",name:"Sketch",navigation:"/sketch",about:" I'm skilled at drawing lifelike faces using pencils, capturing emotions and details with care and creativity."},
            {logo:"/images/skills/certificate.png",name:"Certificate",navigation:"/certificate",about:"My certificates reflect my talents and expertise, acquired through dedicated efforts in various fields."},
            {logo:"/images/skills/dance.png",name:"Dance",navigation:"/dance",about:"I am passionate about dance, particularly hip-hop styles, which allows me to express creativity and stay physically active."},
            {logo:"/images/skills/default.png",name:"Defalut",navigation:"#",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis justo nec odio cursus efficitur. Sed euismod lectus."},
        ]
        setSkill(data);
     }

     else if(location.pathname==="/code"){
        // fetch data from backend
        const data=[
            {logo:"/images/coding/solving.png",name:"PROBLEM SOLVING",navigation:"#",about:" Strong problem-solving skills, employing algorithms and data structures to solve complex challenges."},
            {logo:"/images/coding/react.png",name:"REACT.JS",navigation:"#",about:" Proficient in React.js, creating responsive and dynamic user interfaces for web applications."},
            {logo:"/images/coding/node.png",name:"NODE.JS",navigation:"#",about:"Proficient in Node.js for server-side development, building scalable and high-performance applications"},
            {logo:"/images/coding/mongo.png",name:"MONGODB",navigation:"#",about:" Knowledgeable in MongoDB, designing and managing NoSQL databases for scalable applications."},
            {logo:"/images/coding/api.png",name:"REST FULL API",navigation:"#",about:"RESTful API design and implementation expert for efficient web data exchange and communication."},
            {logo:"/images/coding/js.png",name:"JAVASRIPT",navigation:"/certificate",about:" Skilled in JavaScript, adept at creating interactive web applications, and using modern frameworks like React."},
            {logo:"/images/coding/react.png",name:"REACT NATIVE",navigation:"#",about:" Skilled in React Native, developing cross-platform mobile apps with native-like performance."},
            {logo:"/images/coding/java.png",name:"JAVA",navigation:"/sketch",about:"Basic knowledge of Java, familiar with syntax and fundamental concepts for entry-level programming tasks."},
            {logo:"/images/coding/c.png",name:"C",navigation:"/code",about:"C is my primary language, with six months' experience, solid foundations, and strong problem-solving skills."},
            {logo:"/images/coding/cpp.png",name:"C++",navigation:"/drawing",about:"Proficient in C++ with a focus on object-oriented design, data structures, and performance optimization."},
            {logo:"/images/coding/python.png",name:"PYTHON",navigation:"#",about:"Basic knowledge of Python, understanding syntax and fundamental concepts for introductory programming assignments."},
            {logo:"/images/coding/css.png",name:"CSS",navigation:"/dance",about:"Proficient in CSS, styling web content for a visually appealing and responsive user experience."},
            {logo:"/images/coding/html.png",name:"HTML",navigation:"#",about:" Experienced in HTML, creating structured and semantic web pages for modern web development."},
        ]
        setCode(data);
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
                        {location.pathname==="/code"&&"Technical"}
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