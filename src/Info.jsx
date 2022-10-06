
import profile_pic from "./assets/Nihal_Singh.jpg"
import mail from "./assets/Mail.png"
import linkedin from "./assets/linkedin.png"

export default function Info(){
    return(
        <div className="info">
            <img className="profile" src={profile_pic}/>
            <h3 className="name">Nihal Singh</h3>
            <h4>Frontend Developer</h4>
            <h5>nihal9525.github.io/Portfolio/</h5>
            <div className="button">
            <a href=""><button className="email"><img src={mail} alt="" />Email</button></a>
            <a href="https://www.linkedin.com/in/nihalsingh9525/"><button className="linkedin"><img src={linkedin} alt="" />LinkedIn</button></a>
            </div>
        </div>
    )
}