import { useEffect } from "react"
import { Outlet, Navigate, useNavigate } from "react-router-dom"

const PrivateRoute =({})=>{
    const navigate = useNavigate()
    const userData = JSON.parse(localStorage.getItem("userData"));

useEffect(()=>{

    if (!userData){
        navigate("/Login")
    }
})

return(

<Outlet/>

    )
}

export default PrivateRoute;