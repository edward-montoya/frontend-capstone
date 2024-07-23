import ImageChef from '../../../assets/restaurantchef.jpg';
import './About.scss';

const About = () => {
    return (
      <section className="about">
        <div className='about__content'>
          <h2 className="about__title">Little Lemon</h2>
          <span className="about__subtitle">Chicago</span>
          <p className="about__description">
            Nestled in the heart of bustling Chicago, Little Lemon is where modern
            flair meets cozy nostalgia. Our diverse, artisanal menu, featuring
            delectable bruschettas, succulent burgers, and refreshing Greek
            salads, is a testament to our belief that food is an art. Crafted by
            expert chefs with locally-sourced ingredients, our dishes not only
            delight the palate but nourish the soul. Whether you're seeking a
            romantic dinner, a family meal, or a relaxed atmosphere with friends,
            Little Lemon is your ideal culinary destination. Find us in the heart
            of Chicago for an unforgettable experience.
          </p>
        </div>
  
        <img
          className="about__image"
          src={ImageChef}
          alt="Restarurant chef"
          height={200}
          width={200}
        />
      </section>
    );
  };
  
  export default About;