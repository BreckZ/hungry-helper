import './Layout.css'
import Nav from '../Nav/Nav'

function Layout(props) {
  const { children } = props
  return (
    <div className='layout'>
      <Nav />
      {children}
    </div>
  )
}

export default Layout
