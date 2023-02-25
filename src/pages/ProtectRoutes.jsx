import { Navigate, Outlet } from "react-router-dom"
import Spinner from "../components/Spinner";
import { useAuthStatus } from "../hooks/useAuthStatus"

function ProtectRoutes() {
  const {isLoggedIn, checkingStatus} = useAuthStatus();

  if(checkingStatus){
    return <Spinner />
  }

  return (
    (isLoggedIn ? <Outlet /> : <Navigate to='/login' />)
  )
}

export default ProtectRoutes
