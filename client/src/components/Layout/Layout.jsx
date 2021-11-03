import { Link } from "react-router-dom";
import './Layout.css'

const Layout = (props) => {
  const { children, currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <h1>Hungry Helper</h1>
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <p onClick={handleLogout}>Log Out</p>
          </div>
        ) : (
          <Link to="/login">Log In</Link>
        )}
        {currentUser && (
          <div>
            <Link to='/recipes'>Recipes</Link>
          </div>
        )}
      </header>
      {children}
    </div>
  );
};

export default Layout;
