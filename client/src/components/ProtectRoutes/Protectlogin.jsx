import { Navigate,Outlet } from "react-router-dom"

const Protectlogin = () => {

let islogget= localStorage.getItem("token")
if(!islogget){
    return <Navigate to= "/login"/>
}
  return (
   <Outlet/>
  )
}

export default Protectlogin