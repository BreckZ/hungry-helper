import "./Nav.css";
import { NavLink } from 'react-router-dom';

function Nav(props) {
  const { currentUser, handleSignOut } = props;
  return (
    <nav>
      <NavLink className='logo' to='/'>
        HUNGRY HELPER
      </NavLink>
      {currentUser ? (
        <div className='links'>
          <span className='link'>HELLO, {currentUser.username}</span>
          <NavLink className='link' to='/'>HOME</NavLink>
          <NavLink className='link' to='/recipes'>RECIPES</NavLink>
          <NavLink className='link' to='/create'>CREATE</NavLink>
          <NavLink onClick={handleSignOut} className='link' to='/signout'>SIGN OUT</NavLink>
        </div>
      ) : (
          <div className="links">
          <NavLink className='link' to='/'>HOME</NavLink>
          <NavLink className='link' to='/recipes'>RECIPES</NavLink>
          <NavLink className='link'to='/signin'>SIGN IN</NavLink>
          <NavLink className='link' to='/signup'>SIGN UP</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav;
