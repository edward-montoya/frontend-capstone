import "./Hero.scss";
import HeroImage from "../../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero__container">
        <section className="hero__wrap">
          <div className="hero__content">
            <h2 className="hero__title">Little Lemon</h2>
            <span className="hero__subtitle">India</span>
            <p className="hero__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              excepturi non explicabo vitae. Cupiditate praesentium in
              distinctio maiores ipsam ea.
            </p>
            <Button title="Reserve a table" onClick={() => navigate("/reservations")} />
          </div>
          <div className="image-wrap">
            <img src={HeroImage} alt="Restaurant Food Platter" loading="lazy" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;