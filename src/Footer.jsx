import twitter from "./assets/Twitter Icon.png"
import insta from "./assets/Instagram Icon.png"
import fb from "./assets/Facebook Icon.png"
import github from "./assets/Github Icon.png"

export default function Footer(){
    return(
        <div className="footer">
            <a className="twitter" href="https://twitter.com/NihalSi56982442"><img src={twitter} alt="" /></a>
            <a className="insta" href="https://www.instagram.com/nihal6305/"><img src={insta} alt="" /></a>
            <a className="fb" href="https://www.facebook.com/profile.php?id=100014131568647"><img src={fb} alt="" /></a>
            <a className="github" href="https://github.com/Nihal9525"><img src={github} alt="" /></a>
        </div>
    )
}