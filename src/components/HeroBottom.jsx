import "./Airbnb.css";
import { Card } from "./Card";
import Img_01 from "../assets/img_1.png";
import Img_02 from "../assets/img_2.png";
import Img_03 from "../assets/img_3.png";

export const HeroBottom = () => {
  return (
    <div className="bottom_content">
      <Card
        image={Img_01}
        rating="5.0"
        from="(6) • USA"
        title="Life lessons with Katie Zaferes"
        price="From $136"
        stock="sold out"
      />

      <Card
        image={Img_02}
        rating="5.0"
        from="(30) • USA"
        title="Learn wedding photography"
        price="From $125"
        stock="online"
      />

      <Card
        image={Img_03}
        rating="4.8"
        from="(2) • USA"
        title="Group Mountain Biking"
        price="From $50"
        stock="offline"
      />
    </div>
  );
};
