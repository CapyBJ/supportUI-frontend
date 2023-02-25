import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'
import dark from '../images/dark_mode.png'
import { toggleTheme } from '../features/theme/themeSlice'
import { useState } from 'react'


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { theme } = useSelector(state => state.theme)
 

  const stylesIcon = { fontSize:"1.3em" }
  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <div className='headerBox'>
    <header className='header' onClick={()=>console.log(theme)}>
      <div className='logo'>
        <NavLink to='/'>Support Desk</NavLink>
        <img className='modeToggle' src={dark} alt="dark-mode-img" onClick={()=>dispatch(toggleTheme())}/>
      </div>
      <ul>
         {user &&   
          <li>
            <button className='btn' onClick={handleLogout}><FaSignOutAlt style={stylesIcon}/> Logout</button>
          </li>}
         {!user && <>
            <li>
              <NavLink to='/login'>
                <FaSignInAlt style={stylesIcon}/> Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/register'>
                <FaUser style={stylesIcon}/> Register
              </NavLink>
            </li>
          </>}
      </ul>
    </header>
    </div>
  )
}

export default Header
