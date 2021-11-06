import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="sub-container-1">
          <div className="hero-image">HERO IMAGE</div>
          <div className="subcon-1">
            <div className="hero-text-container">
              <span className="hero-text">DINNER </span>
              <span className="hero-text">DESIGNED </span>
              <span className="hero-text">ON YOUR TERMS</span>
            </div>
            <button className="view-recipes-button">VIEW RECIPES</button>
          </div>
        </div>
        <div className="sub-header-text">SUB HEADER 1</div>
        <div className="sub-header-text">SUB HEADER 2</div>
        <div className="sub-header-text">SUB HEADER 2</div>
        <div className="recipe-card">CARD 1</div>
        <div className="recipe-card">CARD 2</div>
        <div className="recipe-card">CARD 3</div>
      </div>
    </>
  );
}

export default Home;
