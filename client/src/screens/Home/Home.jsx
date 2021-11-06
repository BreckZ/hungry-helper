import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="sub-container-1">
          <div className="image-container">
            <img
              className="hero-image"
              src="https://i.imgur.com/fJFwKlL.jpg"
              alt="spaghetti and meatballs"
            />
          </div>
          <div className="subcon-1">
            <div className="hero-text-container">
              <span className="hero-text">DINNER </span>
              <span className="hero-text designed">DESIGNED </span>
              <span className="hero-text">ON YOUR TERMS</span>
            </div>
            <Link to="/recipes">
              <button type="button" className="view-recipes-button">
                VIEW RECIPES
              </button>
            </Link>
          </div>
        </div>

        <div className="sub-container-2">
          <div className="sub-header-text">SUB HEADER 1</div>
          <div className="sub-header-text">SUB HEADER 2</div>
          <div className="sub-header-text">SUB HEADER 2</div>
        </div>
        
        <div className="recipe-card">CARD 1</div>
        <div className="recipe-card">CARD 2</div>
        <div className="recipe-card">CARD 3</div>
      </div>
    </>
  );
}

export default Home;
