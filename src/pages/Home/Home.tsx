import Hero from "./Hero/Hero";
import SpecialsMenu from "./SpecialMenu/SpecialMenu";
import { Helmet } from "react-helmet";
import Logo from "../../assets/Logo.svg";
import TestimonialList from "./TestimonialList/TestimonialList";
import About from "./About/About";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Little Lemon Restaurant</title>
        <meta
          name="description"
          content="Get all your meals at One Place. Open Monday to Friday, 9 to 5, in the Jublee Hills."
        />
        <meta name="og:title" content="Little Lemon Restaurant" />
        <meta
          name="og:description"
          content="Get all your meals at One Place. Open Monday to Friday, 9 to 5, in the Jublee Hills."
        />
        <meta name="og:image" content={Logo} />
      </Helmet>
      <Hero />
      <SpecialsMenu />
      <TestimonialList />
      <About />
    </>
  );
};

export default Home;
