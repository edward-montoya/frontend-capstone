import Testimonial from "../../../components/Testimonial/Testimonial";
import "./TestimonialList.scss";

const testimonials = [
    {
      id: 1,
      author: "Isabella Montgomery",
      description:
        "Little Lemon's Bruschetta is a symphony of flavors; perfectly crispy bread coupled with the freshest tomatoes.",
      image:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3763188.jpg&fm=jpg",
      rating: 5,
    },
    {
      id: 2,
      author: "Alexander Thompson",
      description:
        "The burger at Little Lemon was a taste revelation with its juicy, perfectly cooked meat and harmonious ingredient pairing.",
      image:
        "https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg",
      rating: 5,
    },
    {
      id: 3,
      author: "Olivia Jenkins",
      description:
        "The Greek Salad at Little Lemon was delightfully fresh and flavorful, with a high-quality dressing. ",
      image:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      rating: 4,
    },
  ];

  const TestimonialList = () => {
    return (
      <section className="testimonials">
          <h2 className="testimonials__title">Testimonials</h2>
          <div className="testimonials__list">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                author={testimonial.author}
                description={testimonial.description}
                image={testimonial.image}
                rating={testimonial.rating}
              />
            ))}
          </div>
      </section>
    );
  };
  
  export default TestimonialList;
