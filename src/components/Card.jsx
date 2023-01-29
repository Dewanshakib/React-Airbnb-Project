import "./Airbnb.css"
import star from "../assets/star_1.png"

export const Card  = ({image,stock,rating,title,price}) => {
    return (
        <div className="Card_div">
            <img src={image} alt="img 01" className="c_img_01" />
                <span className="stock">{stock}</span>
                <div className="star_country">
                    <img src={star} alt="star image" className="star_img"/>
                    <p className="rating">{rating}<span className="change_clr">{props.from}</span></p>
                </div>
                <div className="price_person">
                    <p className="person_titile">{title}</p>
                    <p className="price_title">{price} <span className="change_clr_2">/ person</span></p>
                </div>
        </div>
    )
}