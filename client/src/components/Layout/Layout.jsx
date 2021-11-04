import './Layout.css'
import Nav from '../Nav/Nav'
// import Footer from '../Footer/Footer'

function Layout(props) {
  const { children, currentUser, handleSignOut } = props
  return (
    <div className='layout'>
      <Nav currentUser={currentUser} handleSignOut={handleSignOut}/>
      {children}
    </div>
  )
}

export default Layout
