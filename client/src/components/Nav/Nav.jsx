import "./Nav.css";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink className="link">CREATE RECIPE</NavLink>
    <NavLink className="link">SIGN OUT</NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/signin">
      SIGN IN
    </NavLink>
    <NavLink className="link" to="/signup">
      SIGN UP
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/">
      HOME
    </NavLink>
    <NavLink className="link" to="/recipes">
      RECIPES
    </NavLink>
  </>
);

function Nav(props) {
  const { currentUser } = props;
  return (
    <nav>
      <NavLink className="logo" to="/">
        HUNGRY HELPER
      </NavLink>
      {currentUser ? (
        <div className="links">HELLO, {currentUser.username}
          <NavLink className="link" to="/">HOME</NavLink>
          <NavLink className="link" to="/recipes">RECIPES</NavLink>
          <NavLink className='link' to='recipes/create'>CREATE RECIPE</NavLink>
          <NavLink className='link' to='/signout'>SIGN OUT</NavLink>
        </div>
      ) : (
          <div className="links">
          <NavLink className="link" to="/">HOME</NavLink>
          <NavLink className="link" to="/recipes">RECIPES</NavLink>
          <NavLink to="/signin">SIGN IN</NavLink>
          <NavLink className="link" to="/signup">SIGN UP</NavLink>
        </div>
      )}
      <div className="links">

      </div>
    </nav>
  );
}

export default Nav;
