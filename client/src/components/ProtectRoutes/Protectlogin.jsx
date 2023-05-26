import { Navigate,Outlet } from "react-router-dom"
//const {loginWithRedirect} = auth0()
const Protectlogin = () => {

let islogget= localStorage.getItem("token")
if(!islogget){
//  loginWithRedirect()
}
  return (
   <Outlet/>
  )
}

export default Protectlogin