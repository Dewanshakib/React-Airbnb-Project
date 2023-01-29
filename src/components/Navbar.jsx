import "./Airbnb.css"
import AirbnbLogo from "../assets/Airbnb_logo.png"

export const Navbar = () => {
    return (
        <div className="Navbar">
            <a href="https://www.airbnb.com/" target="_blank" >
            <img src={AirbnbLogo} alt="Airbnb Logo" className="logo_img"/>
            </a>
        </div>
    )
}