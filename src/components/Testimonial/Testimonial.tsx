import Star from "../../assets/star.svg";
import "./Testimonial.scss";

type TestimonialProps = {
  author: string;
  description: string;
  image: string;
  rating: number;
};

const Testimonial = ({
  author,
  description,
  image,
  rating,
}: TestimonialProps) => {
  return (
    <article className="testimonial">
      <div className="testimonial__image-container">
        <img className="testimonial__image" src={image} alt="Customer" />
      </div>
      <p className="testimonial__author">{author}</p>
      <span className="testimonial__stars">
        {[...Array(rating)].map((_, index) => (
          <img key={index} src={Star} alt="star" height={15} width={15} />
        ))}
      </span>
      <div className="testimonial__description">{description}</div>
    </article>
  );
};

export default Testimonial;
