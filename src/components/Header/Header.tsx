import "./Header.scss";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { scrollTo } from "../../utils/scrollTo";
const Header = () => {
  return (
    <header className="header">
          <div className="header__container">
            <div className="header__logo">
                <a href="/">
                <img src={Logo} alt="Little Lemon Logo" />
                </a>
            </div>
            <nav className="header__menu">
                <ul>
                <li className="header__link">
                    <Link to="/">Home</Link>
                </li>
                <li className="header__link">
                    <Link to="/" onClick={() => {scrollTo("#about")}}>
                    About
                    </Link>
                </li>
                <li className="header__link">
                    <Link to="/404">Menu</Link>
                </li>
                <li className="header__link">
                    <Link to="/reservation">Reservation</Link>
                </li>
                <li className="header__link">
                <Link to="/404">
                        Order Online
                    </Link>
                </li>
                <li className="header__link">
                    <Link to="/404">Login</Link>
                </li>
                </ul>
            </nav>
          </div>
    </header>
  );
};

export default Header;