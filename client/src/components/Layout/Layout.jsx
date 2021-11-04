import './Layout.css'
import Nav from '../Nav/Nav'
// import Footer from '../Footer/Footer'

function Layout(props) {
  const { children, currentUser } = props
  return (
    <div className='layout'>
      <Nav currentUser={currentUser}/>
      {children}
    </div>
  )
}

export default Layout
