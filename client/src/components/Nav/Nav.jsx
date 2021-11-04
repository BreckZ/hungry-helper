import './Nav.css'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <NavLink className='logo' to='/'>HUNGRY HELPER</NavLink>
        <div className='links'>
          <NavLink className='link' to='/'>HOME</NavLink>
          <NavLink className='link' to='/recipes'>RECIPES</NavLink>
          <NavLink className='link' to='/signin'>SIGN IN</NavLink>
          <NavLink className='link' to='/signup'>SIGN UP</NavLink>
          {/* <NavLink className='link' to='/signout'>SIGN OUT</NavLink> */}
          {/* <NavLink className='link' to='recipes/create'></NavLink> */}
        </div>
    </nav>
  )
}

export default Nav
