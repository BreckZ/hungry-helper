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
          <div className="sub-header-text">
            <span className="branding-header branding">STORE</span>
            <span className="branding-content branding">Finally a place that lets you keep all your recipes in a single spot!  The Hungry Helper keeps track of recipes for you and makes it easy to find what you want to cook up.</span>
          </div>
          <div className="sub-header-text">
          <span className="branding-header branding">PLAN</span>
            <span className="branding-content branding">Get some great ideas about your next meal!  User generated content will provide you with new recipes to try, while still having access to the reliable ones your family loves.</span>
          </div>
          <div className="sub-header-text">
          <span className="branding-header branding">SAVOR</span>
            <span className="branding-content branding">Something that is catchy and describes what is going on should be written here.  It will be helpful to the user to understand more about your really cool application</span>
          </div>
        </div>

        <div className="recipe-card">CARD 1</div>
        <div className="recipe-card">CARD 2</div>
        <div className="recipe-card">CARD 3</div>
      </div>
    </>
  );
}

export default Home;
