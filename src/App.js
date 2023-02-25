import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import NewTicket from './pages/NewTicket'
import ProtectRoutes from './pages/ProtectRoutes'
import Register from './pages/Register'
import Ticket from './pages/Ticket'
import Tickets from './pages/Tickets'



function App() {

  const { theme } = useSelector(state=>state.theme)
  const {user} = useSelector(state=>state.auth)
  

  return (
    <div className={theme==='light'? 'App': 'App dark' }>
      <Router>
      <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            {<Route path='/login' element={
             <>
              {user && <Navigate to='/' />}
              {!user && <Login /> }
             </>
             } />}
            <Route path='/register' element={
              <>
              {user && <Navigate to='/' />}
              {!user && <Register /> }
             </>
            } />
            <Route path='/new-ticket' element={<ProtectRoutes />} >
              <Route path ='/new-ticket' element={<NewTicket />}/>
            </Route>
            <Route path='/tickets' element={<ProtectRoutes />} >
              <Route path ='/tickets' element={<Tickets />}/>
            </Route>
            <Route path='/ticket/:ticketId' element={<ProtectRoutes />} >
              <Route path ='/ticket/:ticketId' element={<Ticket />}/>
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
