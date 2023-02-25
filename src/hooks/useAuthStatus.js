import { useEffect, useState } from "react";
import {  useSelector } from 'react-redux'

export const useAuthStatus = () => {
  const {user} = useSelector(state=>state.auth)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);


  useEffect(()=>{
    if(user){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
    setCheckingStatus(false)
  },[user])

  return {isLoggedIn, checkingStatus};
}