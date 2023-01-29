import "./Airbnb.css"
import heroTopImg from "../assets/Airbnb_top_img.png"

export const HeroTop = () => {
    return (
        <div className="Top_content">
            <div className="warp_hero_t_img">
                <img src={heroTopImg} alt="Hero background image" className="hero_t_img"/>
                    <div className="info">
                        <h3 className="info_title">Online Experiences</h3>
                        <p className="info_para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
                    </div>
            </div>
        </div>
    )
}