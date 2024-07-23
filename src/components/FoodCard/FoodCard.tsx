import delivery from "../../assets/delivery.svg";
import './FoodCard.scss'; 

type FoodCardProps = {
  title: string;
  image: string;
  price: string;
  description: string;
};
const FoodCard = ({ title, image, price, description }: FoodCardProps) => {
  return (
    <>
      <article className="card">
        <img className="card__image" src={image} alt="food"></img>
        <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__price">{price}</p>
        <p className="card__description">{description}</p>
        <p className="card__delivery">Order a delivery</p>
        <img className="card__delivery-image" src={delivery} alt="uber eats"></img>
        </div>
      </article>
    </>
  );
};

export default FoodCard;
