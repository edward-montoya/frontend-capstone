import "./Hero.scss";
import HeroImage from "../../../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero__container">
        <section className="hero__wrap">
          <div className="hero__content">
            <h2 className="hero__title">Little Lemon</h2>
            <span className="hero__subtitle">Chicago</span>
            <p className="hero__description">
              Nestled in the heart of bustling Chicago, Little Lemon is where
              modern flair meets cozy nostalgia. Our diverse, artisanal menu,
              featuring delectable bruschettas, succulent burgers, and
              refreshing Greek salads, is a testament to our belief that food is
              an art.
            </p>
            <Button
              title="Reserve a table"
              onClick={() => navigate("/reservations")}
            />
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
