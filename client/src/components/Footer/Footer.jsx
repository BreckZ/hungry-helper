import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="catch-phrase">HUNGER SATISFIED</div>
      <a href="https://github.com/BreckZ/hungry-helper">
      <img className="github" src="https://i.imgur.com/ddOqsi5.png" alt="github logo" />
      </a>
      <Link to="/contact">
        <div className="contact-us">CONTACT US</div>
      </Link>
    </footer>
  );
}

export default Footer;
