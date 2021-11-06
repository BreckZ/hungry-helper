import "./Layout.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Layout(props) {
  const { children, currentUser, handleSignOut } = props;
  return (
    <div className="layout">
      <Nav className='nav' currentUser={currentUser} handleSignOut={handleSignOut} />
      <div className='children'>{children}</div>
      <Footer className='footer' />
    </div>
  );
}

export default Layout;
