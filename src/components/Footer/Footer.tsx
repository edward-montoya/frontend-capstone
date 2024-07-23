import "./Footer.scss";
import footerLogo from "../../assets/footerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { scrollTo } from "../../utils/scrollTo";
const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="footer__container">
          <div className="footer__logo">
            <img src={footerLogo} alt="Little Lemon Logo" />
          </div>
          <article className="footer__items">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/" onClick={() => {scrollTo("#about")}} >
                  About
                </Link>
              </li>
              <li>
                <Link to="/404">Menu</Link>
              </li>
              <li>
                <Link to="/reservation">Reservation</Link>
              </li>
              <li>
                <Link to="/404">Login</Link>
              </li>
            </ul>
          </article>
          <article className="footer__items">
            <h3>Contact</h3>
            <p>
              <i>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              Jublee Hills, Hyderabad.
            </p>
            <p>
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              (+91) XXXXX84223
            </p>
            <p>
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              contact@littlelemon.com
            </p>
            <div className="div"></div>
          </article>
          <article className="footer__items">
            <h3>Connect with us</h3>
            <div className="footer__socials">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </article>
        </div>
    </footer>
  );
};

export default Footer;